export function useColorMode() {
  // Must be inside the function — useState requires the Nuxt instance context
  const isDark = useState('color-mode-dark', () => false)

  const toggle = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('color-mode', isDark.value ? 'dark' : 'light')
  }

  // Read localStorage and re-apply class — hydration may have cleared the anti-FOUC class
  const init = () => {
    if (typeof window === 'undefined') return
    isDark.value = localStorage.getItem('color-mode') === 'dark'
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  return { isDark: computed(() => isDark.value), toggle, init }
}
