// Composable for circular theme transition animation using clip-path
export const useThemeTransition = () => {
  const isAnimating = useState('theme-transition-animating', () => false)
  const clipPath = useState('theme-transition-clip', () => 'circle(0% at 50% 50%)')
  const isExpanding = useState('theme-transition-expanding', () => true)
  const { isDark } = useColorMode()

  const triggerTransition = (event: MouseEvent, toggleTheme: () => void) => {
    const button = event.currentTarget as HTMLElement
    const rect = button.getBoundingClientRect()
    
    // Calculate center of toggle button in percentage
    const x = ((rect.left + rect.width / 2) / window.innerWidth) * 100
    const y = ((rect.top + rect.height / 2) / window.innerHeight) * 100
    
    // Determine if we're going to dark or light
    const goingToDark = !isDark.value
    isExpanding.value = goingToDark
    
    // Start animation
    isAnimating.value = true
    
    if (goingToDark) {
      // Phase 1: Expanding to Dark
      // Start with small circle (0%), expand to cover entire viewport (150%)
      clipPath.value = `circle(0% at ${x}% ${y}%)`
      
      requestAnimationFrame(() => {
        clipPath.value = `circle(150% at ${x}% ${y}%)`
      })
      
      // Switch theme at 50% of animation
      setTimeout(() => {
        toggleTheme()
      }, 250)
      
      // Hide overlay after animation completes (hold dark state)
      setTimeout(() => {
        isAnimating.value = false
      }, 500)
    } else {
      // Phase 3: Contracting to Light
      // Start with full coverage, contract to reveal light underneath
      clipPath.value = `circle(150% at ${x}% ${y}%)`
      
      requestAnimationFrame(() => {
        clipPath.value = `circle(0% at ${x}% ${y}%)`
      })
      
      // Switch theme at 50% of animation
      setTimeout(() => {
        toggleTheme()
      }, 250)
      
      // Hide overlay after animation completes
      setTimeout(() => {
        isAnimating.value = false
      }, 500)
    }
  }

  return {
    isAnimating: readonly(isAnimating),
    clipPath: readonly(clipPath),
    isExpanding: readonly(isExpanding),
    triggerTransition,
  }
}
