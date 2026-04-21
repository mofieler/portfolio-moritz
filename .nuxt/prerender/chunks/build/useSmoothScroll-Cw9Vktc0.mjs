import { ref, readonly, computed } from 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/vue/index.mjs';

let globalLenis = null;
const useLenis = () => {
  const isReady = ref(false);
  const scrollTo = (target, options) => {
    {
      if (typeof target === "string" && target.startsWith("#") && false) ;
    }
  };
  const onScroll = (callback) => {
  };
  const stop = () => void 0 ;
  const start = () => void 0 ;
  return {
    lenis: computed(() => globalLenis),
    isReady: readonly(isReady),
    scrollTo,
    onScroll,
    stop,
    start
  };
};
const useSmoothScroll = () => {
  const { scrollTo } = useLenis();
  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    scrollTo(target);
  };
  return {
    handleSmoothScroll
  };
};

export { useLenis as a, useSmoothScroll as u };
//# sourceMappingURL=useSmoothScroll-Cw9Vktc0.mjs.map
