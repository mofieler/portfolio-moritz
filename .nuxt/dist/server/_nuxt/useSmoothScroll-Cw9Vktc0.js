import { ref, readonly, computed } from "vue";
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
  const stop = () => globalLenis?.stop();
  const start = () => globalLenis?.start();
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
export {
  useLenis as a,
  useSmoothScroll as u
};
//# sourceMappingURL=useSmoothScroll-Cw9Vktc0.js.map
