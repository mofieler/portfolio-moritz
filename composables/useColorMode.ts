export function useColorMode() {
  // Must be inside the function — useState requires the Nuxt instance context
  const isDark = useState('color-mode-dark', () => false)

  // localStorage can throw in restricted webviews (in-app browsers, private mode).
  // Swallow errors so we never abort Vue hydration over a non-critical preference.
  const safeGet = (key: string): string | null => {
    try { return localStorage.getItem(key) } catch { return null }
  }
  const safeSet = (key: string, value: string): void => {
    try { localStorage.setItem(key, value) } catch { /* ignore */ }
  }

  const toggle = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
    safeSet('color-mode', isDark.value ? 'dark' : 'light')
  }

  const init = () => {
    if (typeof window === 'undefined') return
    isDark.value = safeGet('color-mode') === 'dark'
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  return { isDark: computed(() => isDark.value), toggle, init }
}
