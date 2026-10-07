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
  '100% (?:upfront|in advance)',
  'advance payment',
  '(?:paid )?upfront',
  'one-month warm-up',
  'up to 500 emails\\/day\\/account',
  'no calls',
].join('|'), 'gi')
const SKIP = 'script,style,textarea,input,select,button,mark,svg,code,pre,[data-no-hl],.arc-mark,.luxury-footer-word,.luxury-footer-bottom,title'

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

export function startPolish() {
  if (typeof window === 'undefined') return
  startSmoothScroll()
  startHighlighter()
  startReveal()
}
