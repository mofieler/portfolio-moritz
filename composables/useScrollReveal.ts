export const useScrollReveal = (selector: string = '.reveal', options?: { threshold?: number; rootMargin?: string }) => {
  const revealed = ref<Set<Element>>(new Set())
  let observer: IntersectionObserver | null = null
  const route = useRoute()

  const scan = () => {
    if (!process.client || !observer) return
    document.querySelectorAll(selector).forEach((el) => {
      if (revealed.value.has(el)) return
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        el.classList.add('active')
        revealed.value.add(el)
      } else {
        observer?.observe(el)
      }
    })
  }

  onMounted(() => {
    if (!process.client) return
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !revealed.value.has(entry.target)) {
            entry.target.classList.add('active')
            revealed.value.add(entry.target)
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: options?.rootMargin ?? '0px',
        threshold: options?.threshold ?? 0.15,
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
