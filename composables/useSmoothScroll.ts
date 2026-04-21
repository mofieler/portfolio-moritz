// Centralized smooth scroll handler to avoid boilerplate in components
export const useSmoothScroll = () => {
  const { scrollTo } = useLenis()

  const handleSmoothScroll = (e: MouseEvent, target: string) => {
    e.preventDefault()
    scrollTo(target)
  }

  return {
    handleSmoothScroll,
  }
}
