import type { Project } from '~/types'

/**
 * Drawer state + keyboard navigation for a list of projects.
 * Pass the list once at call-site; no module-level singletons.
 */
export function useProjectDrawer(projects: Project[]) {
  const isOpen = ref(false)
  const currentProject = ref<Project | null>(null)
  const isSwitching = ref(false)
  const { stop: lenisStop, start: lenisStart } = useLenis()

  const lockScroll = () => {
    // Measure scrollbar width BEFORE hiding overflow so the layout doesn't shift.
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }
    document.body.style.overflow = 'hidden'
    lenisStop()
  }

  const unlockScroll = () => {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
    lenisStart()
  }

  const open = (project: Project) => {
    currentProject.value = project
    isOpen.value = true
    lockScroll()
  }

  const close = () => {
    isOpen.value = false
    unlockScroll()
    setTimeout(() => { currentProject.value = null }, 400)
  }

  const switchProject = (direction: 'next' | 'prev') => {
    if (!currentProject.value || !projects.length) return
    isSwitching.value = true

    setTimeout(() => {
      const currentIndex = projects.findIndex(p => p.id === currentProject.value?.id)
      const delta = direction === 'next' ? 1 : -1
      const newIndex = (currentIndex + delta + projects.length) % projects.length
      currentProject.value = projects[newIndex]
      isSwitching.value = false

      document.querySelector('.drawer-scroll-area')?.scrollTo({ top: 0, behavior: 'smooth' })
    }, 300)
  }

  const next = () => switchProject('next')
  const prev = () => switchProject('prev')

  const handleKeydown = (e: KeyboardEvent) => {
    if (!isOpen.value) return
    if (e.key === 'Escape') close()
    else if (e.key === 'ArrowRight') next()
    else if (e.key === 'ArrowLeft') prev()
  }

  onMounted(() => document.addEventListener('keydown', handleKeydown))
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
    unlockScroll()
  })

  return {
    isOpen: readonly(isOpen),
    currentProject,
    isSwitching: readonly(isSwitching),
    open,
    close,
    next,
    prev,
  }
}
