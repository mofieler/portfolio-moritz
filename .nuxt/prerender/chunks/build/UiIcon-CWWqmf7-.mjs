import { defineComponent, createVNode, resolveDynamicComponent, unref, mergeProps, useSSRContext } from 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/vue/index.mjs';
import { ssrRenderVNode } from 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/vue/server-renderer/index.mjs';
import { SwatchIcon, PaintBrushIcon, BookOpenIcon, PuzzlePieceIcon, LightBulbIcon, Squares2X2Icon, ChartBarIcon, WifiIcon, FireIcon, Battery100Icon, SpeakerWaveIcon, ClockIcon, TrophyIcon, MapIcon, ShieldCheckIcon, ArrowPathIcon, UsersIcon, ArrowsRightLeftIcon, DevicePhoneMobileIcon, CalendarDaysIcon, MapPinIcon, PhoneIcon, BoltIcon, Battery50Icon, CircleStackIcon, CodeBracketIcon, PencilSquareIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon, StarIcon, PhotoIcon, XMarkIcon, ArrowRightIcon, ArrowLeftIcon, ChevronRightIcon, ChevronLeftIcon, ChevronDownIcon, EnvelopeIcon, SparklesIcon, BriefcaseIcon, MoonIcon, SunIcon, HomeIcon } from 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/@heroicons/vue/24/solid/esm/index.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiIcon",
  __ssrInlineRender: true,
  props: {
    name: {},
    size: { default: "md" }
  },
  setup(__props) {
    const sizeMap = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-8 h-8"
    };
    const iconMap = {
      House: HomeIcon,
      Home: HomeIcon,
      Sun: SunIcon,
      Moon: MoonIcon,
      Briefcase: BriefcaseIcon,
      Work: BriefcaseIcon,
      MagicWand: SparklesIcon,
      Sparkles: SparklesIcon,
      Skills: SparklesIcon,
      EnvelopeSimple: EnvelopeIcon,
      Envelope: EnvelopeIcon,
      Mail: EnvelopeIcon,
      ArrowDown: ChevronDownIcon,
      ChevronDown: ChevronDownIcon,
      ChevronLeft: ChevronLeftIcon,
      ChevronRight: ChevronRightIcon,
      CaretLeft: ChevronLeftIcon,
      CaretRight: ChevronRightIcon,
      ArrowLeft: ArrowLeftIcon,
      ArrowRight: ArrowRightIcon,
      X: XMarkIcon,
      XMark: XMarkIcon,
      Close: XMarkIcon,
      Photo: PhotoIcon,
      Image: PhotoIcon,
      Star: StarIcon,
      Expand: ArrowsPointingOutIcon,
      ArrowsPointingOut: ArrowsPointingOutIcon,
      Collapse: ArrowsPointingInIcon,
      ArrowsPointingIn: ArrowsPointingInIcon,
      PenNib: PencilSquareIcon,
      Design: PencilSquareIcon,
      Code: CodeBracketIcon,
      Database: CircleStackIcon,
      BatteryCharging: Battery50Icon,
      Plug: BoltIcon,
      Lightning: BoltIcon,
      Bolt: BoltIcon,
      Phone: PhoneIcon,
      MapPin: MapPinIcon,
      Location: MapPinIcon,
      CalendarDays: CalendarDaysIcon,
      DevicePhoneMobile: DevicePhoneMobileIcon,
      Swatch: SwatchIcon,
      ArrowsRightLeft: ArrowsRightLeftIcon,
      Users: UsersIcon,
      ArrowPath: ArrowPathIcon,
      ShieldCheck: ShieldCheckIcon,
      Map: MapIcon,
      Trophy: TrophyIcon,
      Clock: ClockIcon,
      SpeakerWave: SpeakerWaveIcon,
      Battery100: Battery100Icon,
      Fire: FireIcon,
      Wifi: WifiIcon,
      ChartBar: ChartBarIcon,
      Squares2x2: Squares2X2Icon,
      LightBulb: LightBulbIcon,
      PuzzlePiece: PuzzlePieceIcon,
      BookOpen: BookOpenIcon,
      PaintBrush: PaintBrushIcon,
      Watch: SwatchIcon
    };
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(iconMap[__props.name] || unref(HomeIcon)), mergeProps({
        class: sizeMap[__props.size]
      }, _attrs), null), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/UiIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=UiIcon-CWWqmf7-.mjs.map
