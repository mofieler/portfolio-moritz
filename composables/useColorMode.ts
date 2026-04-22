export function useColorMode() {
  // Use ref instead of useState to avoid SSR hydration mismatch
  // useState persists across SSR -> client transition which causes issues on mobile
  const isDark = ref(false)
  const isHydrated = ref(false)

  // localStorage can throw in restricted webviews (in-app browsers, private mode).
  // Swallow errors so we never abort Vue hydration over a non-critical preference.
  const safeGet = (key: string): string | null => {
    try { return localStorage.getItem(key) } catch { return null }
  }
  const safeSet = (key: string, value: string): void => {
    try { localStorage.setItem(key, value) } catch { /* ignore */ }
  }

  const toggle = () => {
    if (!process.client) return
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
    safeSet('color-mode', isDark.value ? 'dark' : 'light')
  }

  const init = () => {
    if (!process.client || typeof window === 'undefined') return

    // Read the actual DOM state first (set by anti-FOUC script)
    const hasDarkClass = document.documentElement.classList.contains('dark')
    const storedPreference = safeGet('color-mode')

    // If user has explicitly set a preference, use it
    // Otherwise, respect what's already in the DOM (from anti-FOUC script)
    if (storedPreference) {
      isDark.value = storedPreference === 'dark'
    } else {
      isDark.value = hasDarkClass
    }

    // Sync DOM to the resolved value
    document.documentElement.classList.toggle('dark', isDark.value)
    isHydrated.value = true
  }

  return { isDark: computed(() => isDark.value), toggle, init, isHydrated }
}
