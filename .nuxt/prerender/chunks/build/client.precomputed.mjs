import { t as trapUnhandledNodeErrors, c as useNitroApp } from '../_/nitro.mjs';

const nitroApp = useNitroApp();
const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

const server = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const client_precomputed = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

export { client_precomputed as a, closePrerenderer as c, localFetch as l, server as s };
//# sourceMappingURL=client.precomputed.mjs.map
