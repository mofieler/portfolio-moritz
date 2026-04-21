export const useScrollReveal = (selector: string = '.reveal', options?: { threshold?: number; rootMargin?: string }) => {
  const revealed = ref<Set<Element>>(new Set())
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (process.client) {
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

      document.querySelectorAll(selector).forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          el.classList.add('active')
          revealed.value.add(el)
        } else {
          observer?.observe(el)
        }
      })
    }
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return {
    revealed: readonly(revealed),
  }
}
