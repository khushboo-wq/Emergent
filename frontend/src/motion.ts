// Decorative motion layer: scroll progress, cursor glow, card tilt, magnetic buttons.
// Runs only in the browser after hydration. It never changes page text, links or SEO markup.
export function startMotion() {
  if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  const make = (cls: string) => {
    const el = document.createElement('div')
    el.className = cls
    el.setAttribute('aria-hidden', 'true')
    document.body.appendChild(el)
    return el
  }
  const bar = make('arc-progress')
  const grain = make('arc-grain')
  void grain
  const root = document.documentElement
  let ticking = false
  const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      const max = root.scrollHeight - window.innerHeight
      bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`
      ticking = false
    })
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  if (!fine) return

  const ring = make('arc-cursor')
  let tx = 0, ty = 0, cx = 0, cy = 0
  const loop = () => {
    cx += (tx - cx) * 0.18
    cy += (ty - cy) * 0.18
    ring.style.transform = `translate(${cx - 18}px, ${cy - 18}px)`
    requestAnimationFrame(loop)
  }
  requestAnimationFrame(loop)

  window.addEventListener('pointermove', (e) => {
    tx = e.clientX; ty = e.clientY
    root.style.setProperty('--px', String((e.clientX / window.innerWidth - 0.5) * 2))
    root.style.setProperty('--py', String((e.clientY / window.innerHeight - 0.5) * 2))
    const t = e.target as HTMLElement
    ring.classList.toggle('is-link', !!t.closest('a, button'))
    const sec = t.closest('.luxury-hero, .luxury-statement-section') as HTMLElement | null
    if (sec) {
      const r = sec.getBoundingClientRect()
      sec.style.setProperty('--mx', `${e.clientX - r.left}px`)
      sec.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    const card = t.closest('.luxury-service-row') as HTMLElement | null
    if (card) {
      const r = card.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height
      card.style.setProperty('--rx', String(x - 0.5))
      card.style.setProperty('--ry', String(y - 0.5))
      card.style.setProperty('--gx', `${x * 100}%`)
      card.style.setProperty('--gy', `${y * 100}%`)
    }
    const btn = t.closest('.luxury-button') as HTMLElement | null
    if (btn) {
      const r = btn.getBoundingClientRect()
      btn.style.setProperty('--bx', String((e.clientX - (r.left + r.width / 2)) * 0.25))
      btn.style.setProperty('--by', String((e.clientY - (r.top + r.height / 2)) * 0.35))
    }
  }, { passive: true })
  document.addEventListener('pointerout', (e) => {
    const b = (e.target as HTMLElement).closest?.('.luxury-button') as HTMLElement | null
    if (b) { b.style.setProperty('--bx', '0'); b.style.setProperty('--by', '0') }
  })
}
