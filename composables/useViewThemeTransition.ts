// Composable for View Transitions API based theme transition
export const useViewThemeTransition = () => {
  const { isDark, toggle } = useColorMode()

  const triggerTransition = async (event: MouseEvent) => {
    const button = event.currentTarget as HTMLElement
    
    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      // Fallback: just toggle without animation
      toggle()
      return
    }

    // Get button position for custom animation origin
    const rect = button.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    
    // Set CSS custom properties for the animation origin
    document.documentElement.style.setProperty('--transition-origin-x', `${x}px`)
    document.documentElement.style.setProperty('--transition-origin-y', `${y}px`)

    // Start the view transition
    const transition = document.startViewTransition(() => {
      // This callback updates the DOM to the new state
      toggle()
    })

    // Wait for the transition to be ready, then customize the animation
    await transition.ready

    // The pseudo-elements (::view-transition-old(root) and ::view-transition-new(root))
    // are now available. We can animate them with a circular reveal.
    
    // The animation is handled by CSS, but we could also do it here with Web Animations API
  }

  return {
    triggerTransition,
    isSupported: !!document.startViewTransition,
  }
}
