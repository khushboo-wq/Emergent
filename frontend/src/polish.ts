// Polish layer: inertial smooth scrolling, price/key-term highlighting, scroll-reveal for text.
// Purely decorative; never changes wording or SEO markup (prerendered HTML is untouched until after load).
const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------- Smooth (inertial) wheel scrolling, desktop only ---------- */
function startSmoothScroll() {
  if (reduce() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
  const root = document.documentElement
  let target = window.scrollY, current = window.scrollY, raf = 0, active = false
  const max = () => root.scrollHeight - window.innerHeight
  const inScrollable = (el: Element | null) => {
    while (el && el !== document.body) {
      const s = getComputedStyle(el)
      if (/(auto|scroll)/.test(s.overflowY) && el.scrollHeight > el.clientHeight + 2) return true
      el = el.parentElement
    }
    return false
  }
  const tick = () => {
    current += (target - current) * 0.11
    if (Math.abs(target - current) < 0.4) { current = target; active = false }
    window.scrollTo({ top: current, left: 0, behavior: 'instant' as ScrollBehavior })
    if (active) raf = requestAnimationFrame(tick)
  }
  window.addEventListener('wheel', (e) => {
    if (e.ctrlKey || e.defaultPrevented || inScrollable(e.target as Element)) return
    if (document.body.style.overflow === 'hidden' || document.body.hasAttribute('data-scroll-locked')) return
    e.preventDefault()
    if (!active) { target = current = window.scrollY }
    const dy = e.deltaMode === 1 ? e.deltaY * 32 : e.deltaY
    target = Math.max(0, Math.min(max(), target + dy))
    if (!active) { active = true; raf = requestAnimationFrame(tick) }
  }, { passive: false })
  // keep in sync when scrolled by keyboard / scrollbar / route change
  window.addEventListener('scroll', () => { if (!active) { target = current = window.scrollY } }, { passive: true })
  window.addEventListener('arc:route', () => { cancelAnimationFrame(raf); active = false; target = current = 0 })
}

/* ---------- Highlighter: prices and key terms ---------- */
const PATTERN = new RegExp([
  '[€£]\\s?\\d[\\d,]*(?:\\.\\d+)?(?:\\s?\\/\\s?(?:month|hour))?',
  '50% (?:advance|in advance|on delivery)',
  '50% at the (?:start|end)(?: of the month)?',
  '\\bWise\\b',
  'advance payment',
  '(?:paid )?upfront',
  'one-month warm-up',
  'up to 500 emails\\/day\\/account',
  'no calls',
].join('|'), 'gi')
const SKIP = 'script,style,textarea,input,select,button,mark,svg,code,pre,h1,h2,h3,h4,.pricing-card-price,.pricing-card-terms,.service-pricing,.font-highlight,[data-no-hl],.arc-mark,.luxury-footer-word,.luxury-footer-bottom,title'

function highlight(rootEl: ParentNode) {
  const walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT, {
    acceptNode(n) {
      const p = n.parentElement
      if (!p || p.closest(SKIP)) return NodeFilter.FILTER_REJECT
      PATTERN.lastIndex = 0
      return PATTERN.test(n.nodeValue || '') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    },
  })
  const nodes: Text[] = []
  while (walker.nextNode()) nodes.push(walker.currentNode as Text)
  nodes.forEach((node) => {
    const text = node.nodeValue || ''
    const frag = document.createDocumentFragment()
    let last = 0
    PATTERN.lastIndex = 0
    let m: RegExpExecArray | null
    while ((m = PATTERN.exec(text))) {
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)))
      const mark = document.createElement('mark')
      mark.className = /[€£]/.test(m[0]) ? 'arc-mark arc-price' : 'arc-mark'
      mark.textContent = m[0]
      frag.appendChild(mark)
      last = m.index + m[0].length
    }
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)))
    try { node.replaceWith(frag) } catch { /* node removed by React meanwhile */ }
  })
}

function startHighlighter() {
  let t = 0
  const run = () => { window.clearTimeout(t); t = window.setTimeout(() => highlight(document.getElementById('root') || document.body), 120) }
  run()
  new MutationObserver((muts) => {
    if (muts.some((m) => [...m.addedNodes].some((n) => !(n instanceof HTMLElement && n.classList.contains('arc-mark')) && n.nodeType === 1))) run()
  }).observe(document.getElementById('root')!, { childList: true, subtree: true })
}

/* ---------- Scroll reveal (JS fallback for browsers without view() timelines) ---------- */
function startReveal() {
  if (reduce() || CSS.supports('animation-timeline: view()')) return
  const sel = 'main h1, main h2, main h3, main p, main li, main article, main .premium-panel'
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('arc-in'); io.unobserve(en.target) }
  }), { threshold: 0.12 })
  const scan = () => document.querySelectorAll(sel).forEach((el) => { if (!el.classList.contains('arc-rv')) { el.classList.add('arc-rv'); io.observe(el) } })
  scan()
  new MutationObserver(scan).observe(document.getElementById('root')!, { childList: true, subtree: true })
}

/* ---------- Lift tiny text (anything under ~15px) so nothing reads small ---------- */
function liftTinyText() {
  const root = document.getElementById('root'); if (!root) return
  const scan = () => {
    root.querySelectorAll<HTMLElement>('main *, footer *').forEach((el) => {
      if (el.dataset.arcSz || el.closest('svg,.arc-grain,.luxury-footer-word,.luxury-marquee')) return
      if (![...el.childNodes].some((n) => n.nodeType === 3 && (n.nodeValue || '').trim())) return
      const fs = parseFloat(getComputedStyle(el).fontSize)
      el.dataset.arcSz = '1'
      if (fs < 11.6) el.style.fontSize = '13px'
      else if (fs < 15) el.style.fontSize = '16px'
    })
  }
  let t = 0
  const run = () => { window.clearTimeout(t); t = window.setTimeout(scan, 200) }
  run()
  new MutationObserver(run).observe(root, { childList: true, subtree: true })
}

/* ---------- Cursor spotlight everywhere + highlight the hovered block ---------- */
function startSpotlight() {
  if (reduce() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
  const glow = document.createElement('div')
  glow.className = 'arc-spotlight'
  glow.setAttribute('aria-hidden', 'true')
  document.body.appendChild(glow)
  const SEL = 'a, button, input, select, textarea, article, li, .premium-panel, .luxury-service-row, .luxury-process-item, .onboarding-card, .arc-showcase-card, .arc-profile, [class*="rounded-2xl"], [class*="rounded-["], .footer-info-grid > div, .service-commercial-card, .service-tab'
  let hot: HTMLElement | null = null
  let x = 0, y = 0, raf = 0
  const paint = () => { raf = 0; glow.style.transform = `translate(${x - 260}px, ${y - 260}px)` }
  window.addEventListener('pointermove', (e) => {
    x = e.clientX; y = e.clientY
    glow.style.opacity = '1'
    if (!raf) raf = requestAnimationFrame(paint)
    const t = (e.target as HTMLElement).closest?.(SEL) as HTMLElement | null
    if (t !== hot) { hot?.classList.remove('arc-hot'); hot = t; hot?.classList.add('arc-hot') }
    if (hot) {
      const r = hot.getBoundingClientRect()
      hot.style.setProperty('--hx', `${e.clientX - r.left}px`)
      hot.style.setProperty('--hy', `${e.clientY - r.top}px`)
    }
  }, { passive: true })
  document.addEventListener('pointerleave', () => { glow.style.opacity = '0'; hot?.classList.remove('arc-hot'); hot = null })
}

/* ---------- Headline word-by-word reveal (h1 on every page) ---------- */
function splitHeadlines() {
  if (reduce()) return
  const run = () => document.querySelectorAll<HTMLElement>('main h1:not([data-arc-split])').forEach((h) => {
    h.dataset.arcSplit = '1'
    let i = 0
    const walk = (node: Node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === 3) {
          const parts = (child.nodeValue || '').split(/(\s+)/)
          const frag = document.createDocumentFragment()
          parts.forEach((part) => {
            if (!part) return
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return }
            const outer = document.createElement('span'); outer.className = 'arc-word'
            const inner = document.createElement('span'); inner.textContent = part; inner.style.setProperty('--i', String(i++))
            outer.appendChild(inner); frag.appendChild(outer)
          })
          child.replaceWith(frag)
        } else if (child.nodeType === 1 && !(child as Element).classList.contains('arc-word')) {
          if ((child as Element).tagName === 'EM') { (child as HTMLElement).classList.add('arc-em-in'); (child as HTMLElement).style.setProperty('--i', String(i++)) } else walk(child)
        }
      })
    }
    walk(h)
  })
  run()
  new MutationObserver(() => run()).observe(document.getElementById('root')!, { childList: true, subtree: true })
}

/* ---------- Shrink any heading / tab label that would overflow its box (wide display fonts) ---------- */
function fitText() {
  const SEL = 'main h1, main h2, main h3, .luxury-footer h2, .arc-showcase-title, .service-tab-title, .luxury-nav-link, .luxury-mobile-nav a, .arc-logo-text strong'
  const fit = () => document.querySelectorAll<HTMLElement>(SEL).forEach((el) => {
    el.style.fontSize = ''
    let size = parseFloat(getComputedStyle(el).fontSize)
    let guard = 0
    const words = (el.textContent || '').split(/\s+/).filter(Boolean)
    const tooWide = () => el.scrollWidth > el.clientWidth + 1 || (words.length && !el.closest('.service-tabs, nav') && el.getBoundingClientRect().right > window.innerWidth)
    while (tooWide() && size > 11 && guard++ < 30) { size -= 1; el.style.setProperty('font-size', size + 'px', 'important') }
  })
  let t = 0
  const run = () => { window.clearTimeout(t); t = window.setTimeout(fit, 150) }
  ;(document as Document & { fonts?: FontFaceSet }).fonts?.ready.then(run)
  run()
  window.addEventListener('resize', run)
  new MutationObserver(run).observe(document.getElementById('root')!, { childList: true, subtree: true })
}

/* ---------- Floating 3D shapes inside section backgrounds, themed per service (move + scroll parallax) ---------- */
const ICONS: Record<string, string> = {
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  network: '<circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M7 7.5l3.5 8.5M17 7.5l-3.5 8.5M7.5 6h9"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  send: '<path d="M3 11l18-8-7 18-2-8z"/><path d="M12 13l9-10"/>',
  inbox: '<path d="M3 13l3-8h12l3 8v6H3z"/><path d="M3 13h5l1 3h6l1-3h5"/>',
  check: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 9l2 2 4-4M8 16h8"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  doc: '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h7M9 16h7"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  funnel: '<path d="M3 4h18l-7 9v7l-4-2v-5z"/>',
  table: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M3 14h18M9 4v16"/>',
  play: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9l5 3-5 3z"/>',
  film: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
  spark: '<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>',
  shield: '<path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  server: '<rect x="4" y="4" width="16" height="7" rx="2"/><rect x="4" y="13" width="16" height="7" rx="2"/><path d="M8 7.5h.01M8 16.5h.01"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  euro: '<path d="M17 6a7 7 0 1 0 0 12M4 10h10M4 14h10"/>',
}
const THEMES: Record<string, { icons: string[]; tint: string }> = {
  'linkedin-management': { icons: ['user', 'network', 'chat'], tint: 'cobalt' },
  'email-outreach': { icons: ['mail', 'send', 'inbox'], tint: 'violet' },
  'business-support': { icons: ['check', 'calendar', 'doc'], tint: 'amber' },
  'lead-generation': { icons: ['target', 'funnel', 'table'], tint: 'teal' },
  'ai-video-creation': { icons: ['play', 'film', 'spark'], tint: 'violet' },
  'email-setup': { icons: ['shield', 'server', 'lock'], tint: 'blue' },
  pricing: { icons: ['euro', 'check', 'doc'], tint: 'violet' },
  'reporting-compliance': { icons: ['chart', 'shield', 'doc'], tint: 'teal' },
  contact: { icons: ['chat', 'mail', 'send'], tint: 'violet' },
  default: { icons: ['network', 'mail', 'target', 'play', 'check', 'shield'], tint: 'mix' },
}
function themeFor(path: string) {
  const parts = path.split('/').filter(Boolean)
  if (parts[0] === 'services' && parts[1] && THEMES[parts[1]]) return THEMES[parts[1]]
  if (parts[0] && THEMES[parts[0]]) return THEMES[parts[0]]
  return THEMES.default
}
function startFloatingShapes() {
  if (reduce()) return
  const SEL = 'main > section, main > div[data-testid="service-page-content"], .luxury-footer-cta'
  const blobs = ['sphere-v', 'ring', 'sphere-t', 'capsule', 'sphere-c']
  let n = 0
  const decorate = () => {
    const theme = themeFor(location.pathname)
    document.querySelectorAll<HTMLElement>(SEL).forEach((sec) => {
      if (sec.dataset.arcShapes || sec.offsetHeight < 260) return
      sec.dataset.arcShapes = '1'
      sec.classList.add('arc-shape-host')
      const count = sec.offsetHeight > 700 ? 3 : 2
      for (let i = 0; i < count; i++) {
        const el = document.createElement('span')
        const iconTurn = (n + i) % 3 !== 2
        if (iconTurn) {
          const icon = theme.icons[(n + i) % theme.icons.length]
          el.className = `arc-shape arc-shape-tile arc-tint-${theme.tint === 'mix' ? ['cobalt', 'violet', 'teal', 'amber'][(n + i) % 4] : theme.tint}`
          el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[icon]}</svg>`
        } else {
          el.className = `arc-shape arc-shape-${blobs[(n + i) % blobs.length]}`
        }
        el.setAttribute('aria-hidden', 'true')
        // keep shapes in the side gutters so they never sit behind text
        const side = (n + i) % 2 === 0 ? 'left' : 'right'
        el.style[side] = side === 'left' ? `${-34 + ((n + i) % 3) * 12}px` : `${70 + ((n + i) % 3) * 30}px`
        el.style.top = side === 'left' ? `${[14, 46, 74][i]}%` : `${[2, 86, 2][i]}%`
        el.style.setProperty('--d', `${(n + i) % 5}s`)
        el.style.setProperty('--speed', String(0.06 + ((n + i) % 4) * 0.035))
        sec.appendChild(el)
      }
      n += count
    })
  }
  decorate()
  new MutationObserver(() => decorate()).observe(document.getElementById('root')!, { childList: true, subtree: true })
  let ticking = false
  window.addEventListener('scroll', () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>('.arc-shape').forEach((el) => {
        const r = el.parentElement!.getBoundingClientRect()
        if (r.bottom < 0 || r.top > window.innerHeight) return
        const sp = parseFloat(el.style.getPropertyValue('--speed')) || 0.08
        el.style.setProperty('--py', `${(r.top - window.innerHeight / 2) * -sp}px`)
      })
      document.querySelectorAll<HTMLElement>('.arc-shape-host').forEach((sec) => {
        const r = sec.getBoundingClientRect()
        if (r.bottom < 0 || r.top > window.innerHeight) return
        sec.style.setProperty('--bgy', `${50 + (r.top / window.innerHeight) * -12}%`)
      })
      ticking = false
    })
  }, { passive: true })
}

export function startPolish() {
  if (typeof window === 'undefined') return
  startSmoothScroll()
  startHighlighter()
  startReveal()
  liftTinyText()
  startSpotlight()
  splitHeadlines()
  fitText()
  startFloatingShapes()
}
