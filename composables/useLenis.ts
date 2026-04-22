/**
 * Native scroll wrapper — Lenis was removed because it caused interaction
 * issues on iOS and added bundle weight without enough benefit.
 * Native CSS `scroll-behavior: smooth` + `scrollIntoView` cover everything we need.
 */

export const useLenis = () => {
  const scrollTo = (target: string | number | HTMLElement, options?: { offset?: number; duration?: number }) => {
    if (!process.client) return

    if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' })
      return
    }

    const el =
      typeof target === 'string'
        ? document.querySelector(target)
        : target

    if (!el) return

    const offset = options?.offset ?? -50
    const rect = (el as HTMLElement).getBoundingClientRect()
    const top = window.scrollY + rect.top + offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  // Native scroll listener — replaces Lenis's `onScroll` callback shape.
  // Returned cleanup function so callers can detach when unmounting.
  const onScroll = (
    callback: (e: { scroll: number; limit: number; velocity: number; direction: number; progress: number }) => void,
  ) => {
    if (!process.client) return () => {}

    let lastScroll = window.scrollY
    let lastTime = performance.now()

    const handler = () => {
      const now = performance.now()
      const scroll = window.scrollY
      const dt = Math.max(now - lastTime, 1)
      const delta = scroll - lastScroll
      const velocity = delta / dt
      const limit = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)

      callback({
        scroll,
        limit,
        velocity,
        direction: delta > 0 ? 1 : delta < 0 ? -1 : 0,
        progress: scroll / limit,
      })

      lastScroll = scroll
      lastTime = now
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }

  // No-ops — Lenis used to expose stop/start to lock scroll while drawer was open;
  // useProjectDrawer now relies on body overflow:hidden, which is enough.
  const stop = () => {}
  const start = () => {}

  return {
    lenis: computed(() => null),
    isReady: computed(() => true),
    scrollTo,
    onScroll,
    stop,
    start,
  }
}
