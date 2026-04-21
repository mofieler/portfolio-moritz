import Lenis from 'lenis'

// Singleton pattern to ensure only one Lenis instance exists globally
let globalLenis: Lenis | null = null
let rafId: number | null = null

const initGlobalLenis = () => {
  if (!process.client || globalLenis) return

  globalLenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  })

  const raf = (time: number) => {
    globalLenis?.raf(time)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)
}

const destroyGlobalLenis = () => {
  if (rafId) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
  globalLenis?.destroy()
  globalLenis = null
}

export const useLenis = () => {
  const isReady = ref(false)

  const scrollTo = (target: string | number | HTMLElement, options?: { offset?: number; duration?: number }) => {
    if (globalLenis) {
      globalLenis.scrollTo(target, {
        offset: options?.offset ?? -50,
        duration: options?.duration ?? 1.2,
      })
    } else {
      // Fallback for SSR
      if (typeof target === 'string' && target.startsWith('#') && process.client) {
        const element = document.querySelector(target)
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const onScroll = (callback: (e: { scroll: number; limit: number; velocity: number; direction: number; progress: number }) => void) => {
    globalLenis?.on('scroll', callback)
  }

  onMounted(() => {
    initGlobalLenis()
    isReady.value = true
  })

  // Only destroy on actual app unmount, not component unmount
  // This prevents multiple instances from being created/destroyed

  const stop  = () => globalLenis?.stop()
  const start = () => globalLenis?.start()

  return {
    lenis: computed(() => globalLenis),
    isReady: readonly(isReady),
    scrollTo,
    onScroll,
    stop,
    start,
  }
}
