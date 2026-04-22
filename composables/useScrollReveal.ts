/**
 * Scroll-reveal that works the same way on every device.
 *
 * Design contract: content is visible by default in CSS. We only ADD an
 * animation pre-state (`reveal-pending`) to elements that are off-screen,
 * so anything already in the viewport never flashes invisible. If JS
 * fails or this composable never runs, the page still looks correct.
 */
export const useScrollReveal = (selector: string = '.reveal', options?: { threshold?: number; rootMargin?: string }) => {
  const route = useRoute()
  let observer: IntersectionObserver | null = null
  const seen = new WeakSet<Element>()

  const supportsObserver = () =>
    typeof window !== 'undefined' && 'IntersectionObserver' in window

  const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const reveal = (el: Element) => {
    el.classList.add('active')
    seen.add(el)
  }

  const scan = () => {
    if (!process.client) return
    const elements = document.querySelectorAll(selector)

    // No observer support or reduced motion → just mark everything active, no animation prep.
    if (!supportsObserver() || prefersReducedMotion()) {
      elements.forEach((el) => {
        if (!seen.has(el)) reveal(el)
      })
      return
    }

    elements.forEach((el) => {
      if (seen.has(el)) return

      const rect = el.getBoundingClientRect()
      const inViewport = rect.top < window.innerHeight && rect.bottom > 0

      if (inViewport) {
        // Already visible — show without animation prep, no flash possible.
        reveal(el)
      } else {
        // Off-screen — queue for animated reveal.
        el.classList.add('reveal-pending')
        observer?.observe(el)
      }
    })
  }

  onMounted(() => {
    if (!process.client) return

    if (supportsObserver()) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !seen.has(entry.target)) {
              reveal(entry.target)
              observer?.unobserve(entry.target)
            }
          })
        },
        {
          root: null,
          // Trigger slightly before the element actually enters — feels snappier on mobile scroll
          rootMargin: options?.rootMargin ?? '0px 0px -8% 0px',
          threshold: options?.threshold ?? 0.05,
        },
      )
    }

    // Wait one frame so dynamically inserted children (post-hydration) are in the DOM.
    requestAnimationFrame(scan)
  })

  // Re-scan after route changes — new page = new reveal targets.
  watch(() => route.fullPath, () => {
    requestAnimationFrame(scan)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
  })

  return {}
}
