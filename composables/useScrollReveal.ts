export const useScrollReveal = (selector: string = '.reveal', options?: { threshold?: number; rootMargin?: string }) => {
  const revealed = ref<Set<Element>>(new Set())
  let observer: IntersectionObserver | null = null
  const route = useRoute()

  // Detect mobile devices (including iOS)
  const isMobile = () => {
    if (!process.client) return false
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  }

  const revealElement = (el: Element) => {
    if (revealed.value.has(el)) return
    el.classList.add('active')
    revealed.value.add(el)
  }

  const scan = () => {
    if (!process.client) return
    const elements = document.querySelectorAll(selector)
    
    // On mobile, reveal elements immediately without animation
    // to avoid iOS viewport/observer issues
    if (isMobile()) {
      elements.forEach(revealElement)
      return
    }
    
    // Desktop: use IntersectionObserver for animations
    if (!observer) return
    elements.forEach((el) => {
      if (revealed.value.has(el)) return
      const rect = el.getBoundingClientRect()
      // More generous check: element is in or near viewport
      if (rect.top < window.innerHeight + 100) {
        revealElement(el)
      } else {
        observer?.observe(el)
      }
    })
  }

  onMounted(() => {
    if (!process.client) return
    
    // Mobile: skip observer, reveal all immediately
    // setTimeout instead of nextTick to ensure all section children (previously in ClientOnly) are in the DOM
    if (isMobile()) {
      setTimeout(scan, 150)
      return
    }
    
    // Desktop: use IntersectionObserver for scroll animations
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !revealed.value.has(entry.target)) {
            revealElement(entry.target)
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: options?.rootMargin ?? '50px',
        threshold: options?.threshold ?? 0.1,
      }
    )
    scan()
  })

  // Re-scan after every route navigation (page component remounts with new .reveal elements)
  watch(() => route.fullPath, () => {
    revealed.value.clear()
    nextTick(scan)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return {
    revealed: readonly(revealed),
  }
}
