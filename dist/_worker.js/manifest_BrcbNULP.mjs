globalThis.process ??= {}; globalThis.process.env ??= {};
import { h as decodeKey } from './chunks/astro/server_x7TXGaPa.mjs';
import './chunks/astro-designed-error-pages_stSGaXAd.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_CrI0TKtI.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/brandon/Desktop/kaleida-landing/","cacheDir":"file:///Users/brandon/Desktop/kaleida-landing/node_modules/.astro/","outDir":"file:///Users/brandon/Desktop/kaleida-landing/dist/","srcDir":"file:///Users/brandon/Desktop/kaleida-landing/src/","publicDir":"file:///Users/brandon/Desktop/kaleida-landing/public/","buildClientDir":"file:///Users/brandon/Desktop/kaleida-landing/dist/","buildServerDir":"file:///Users/brandon/Desktop/kaleida-landing/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Snva7Q6F.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/brandon/Desktop/kaleida-landing/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BrcbNULP.mjs","/Users/brandon/Desktop/kaleida-landing/src/components/RetroGrid":"_astro/RetroGrid.v1GzbNr0.js","/Users/brandon/Desktop/kaleida-landing/src/components/Header":"_astro/Header.VwSf-IGp.js","/Users/brandon/Desktop/kaleida-landing/src/components/HeroSection":"_astro/HeroSection.Di_LwvIk.js","/Users/brandon/Desktop/kaleida-landing/src/components/MainContent":"_astro/MainContent.BRhSA0ni.js","/Users/brandon/Desktop/kaleida-landing/src/components/Footer":"_astro/Footer.B-7cbU8D.js","/Users/brandon/Desktop/kaleida-landing/src/components/CRTOverlay":"_astro/CRTOverlay.CREoU6QK.js","@astrojs/react/client.js":"_astro/client.CpsmGizg.js","/Users/brandon/Desktop/kaleida-landing/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.kDPIZQUs.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/brandon/Desktop/kaleida-landing/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{document.getElementById(\"app-container\");const e=document.createElement(\"div\");e.className=\"fixed inset-0 bg-black flex items-center justify-center z-50\",e.innerHTML=`\n        <div class=\"text-neon-green font-mono text-xl\">\n          <p>KALEIDA OS v1.0</p>\n          <p>Initializing...</p>\n          <p class=\"animate-pulse\">Press any key to continue</p>\n        </div>\n      `,document.body.appendChild(e),setTimeout(()=>{e.style.opacity=\"0\",e.style.transition=\"opacity 0.5s\",setTimeout(()=>{e.remove()},500)},3e3)});"]],"assets":["/_astro/index.Snva7Q6F.css","/favicon.ico","/favicon.svg","/_astro/CRTOverlay.CREoU6QK.js","/_astro/Footer.B-7cbU8D.js","/_astro/Header.VwSf-IGp.js","/_astro/HeroSection.Di_LwvIk.js","/_astro/MainContent.BRhSA0ni.js","/_astro/RetroGrid.v1GzbNr0.js","/_astro/client.CpsmGizg.js","/_astro/index.6uItJ9jz.js","/_astro/jsx-runtime.D7gjeLXK.js","/_astro/proxy.BdgrlCvR.js","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/_noop-actions.mjs","/_worker.js/index.js","/_worker.js/renderers.mjs","/_worker.js/_astro/index.Snva7Q6F.css","/_worker.js/pages/_image.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/chunks/_@astro-renderers_D_W29Osc.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_Cf1u8v1C.mjs","/_worker.js/chunks/astro-designed-error-pages_stSGaXAd.mjs","/_worker.js/chunks/astro_BVz88mHY.mjs","/_worker.js/chunks/index_CPCmUlCW.mjs","/_worker.js/chunks/noop-middleware_CrI0TKtI.mjs","/_worker.js/chunks/astro/server_x7TXGaPa.mjs"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"8k4qiVPNM6uGhpdIDbI3e5T/PwA5khek6MnLavvOd/A="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
