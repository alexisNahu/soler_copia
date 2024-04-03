import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_B5SYsdU8.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
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
    isIndex: rawRouteData.isIndex
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
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.55INgWwS.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.55INgWwS.js"}],"styles":[{"type":"external","src":"/_astro/about.Bmuk36ZM.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.55INgWwS.js"}],"styles":[{"type":"external","src":"/_astro/about.Bmuk36ZM.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.55INgWwS.js"}],"styles":[{"type":"external","src":"/_astro/about.Bmuk36ZM.css"}],"routeData":{"route":"/profesionales","isIndex":false,"type":"page","pattern":"^\\/profesionales\\/?$","segments":[[{"content":"profesionales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/profesionales.astro","pathname":"/profesionales","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.55INgWwS.js"}],"styles":[{"type":"external","src":"/_astro/about.Bmuk36ZM.css"}],"routeData":{"route":"/servicios","isIndex":false,"type":"page","pattern":"^\\/servicios\\/?$","segments":[[{"content":"servicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios.astro","pathname":"/servicios","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.55INgWwS.js"}],"styles":[{"type":"external","src":"/_astro/about.Bmuk36ZM.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/diana/source/repos/soler eas/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/diana/source/repos/soler eas/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/Users/diana/source/repos/soler eas/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/diana/source/repos/soler eas/src/pages/profesionales.astro",{"propagation":"none","containsHead":true}],["C:/Users/diana/source/repos/soler eas/src/pages/servicios.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_CJ3lMEO2.mjs","/src/pages/index.astro":"chunks/pages/index_Ckls2HRx.mjs","/src/pages/profesionales.astro":"chunks/pages/profesionales_BSHG9oOG.mjs","/src/pages/servicios.astro":"chunks/pages/servicios_C8M24tWe.mjs","\u0000@astrojs-manifest":"manifest_BSys-Lgj.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_utko6DhE.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_CA_te-Iy.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"chunks/contacto_D7EJ28Xp.mjs","\u0000@astro-page:src/pages/profesionales@_@astro":"chunks/profesionales_330GzHc_.mjs","\u0000@astro-page:src/pages/servicios@_@astro":"chunks/servicios_Cwi3wc1t.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_Ba3prBJT.mjs","astro:scripts/page.js":"_astro/page.55INgWwS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/HelveticaNeueRoman.CSpBGpqm.otf","/_astro/about.Bmuk36ZM.css","/favicon.svg","/solerfavicon.svg","/solerLogo.svg","/solerLogo.webp","/about/about1.svg","/about/about2.svg","/about/about3.svg","/about/aboutBg.webp","/about/aboutHero.webp","/about/valores1.svg","/about/valores2.svg","/about/valores3.svg","/about/valores4.svg","/about/valores5.svg","/about/valores6.svg","/contacto/contactoBanner.webp","/contacto/contactoBg.webp","/contacto/mapa.webp","/fonts/HelveticaNeueBlack.otf","/fonts/HelveticaNeueBold.otf","/fonts/HelveticaNeueHeavy.otf","/fonts/HelveticaNeueLight.otf","/fonts/HelveticaNeueMedium.otf","/fonts/HelveticaNeueRoman.otf","/fonts/HelveticaNeueThin.otf","/fonts/HelveticaNeueUltraLight.otf","/footer/fb.svg","/footer/ig.svg","/footer/linkedin.svg","/footer/location.svg","/footer/msg.svg","/footer/phone.svg","/footer/solerFooter.svg","/footer/solerFooter.webp","/index/check.svg","/index/garantizamos1.svg","/index/garantizamos2.svg","/index/garantizamos3.svg","/index/garantizamos4.svg","/index/garantizamos5.svg","/index/garantizamos6.svg","/index/heroIndex.webp","/index/NuestroEquipo.webp","/index/servicio1.webp","/index/servicio2.webp","/index/servicio3.webp","/index/servicio4.webp","/index/servicio5.webp","/profesionales/joseSoler.webp","/profesionales/pro1.svg","/profesionales/pro2.svg","/profesionales/pro3.svg","/profesionales/pro4.svg","/profesionales/pro5.svg","/profesionales/pro6.svg","/profesionales/pro7.svg","/profesionales/pro8.svg","/profesionales/proBanner.webp","/profesionales/proBg.webp","/servicios/servicioBanner.webp","/servicios/servicioBg.webp","/_astro/page.55INgWwS.js","/_astro/page.55INgWwS.js"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
