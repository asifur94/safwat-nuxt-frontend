export const localeCodes = ["en","ar"]

export const localeMessages = {
}

export const additionalMessages = Object({"en":[],"ar":[],})

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({})
  const vueI18nOptionsLoader = async (context) => Object({"locale":"en","fallbackLocale":"en","messages": Object({"en":{
  "hello": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hellow"])};fn.source="Hellow";return fn;})(),
  "welcome": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Welcome"])};fn.source="Welcome";return fn;})()
},"ar":{
  "hello": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["مرحبًا"])};fn.source="مرحبًا";return fn;})(),
  "welcome": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["أهلا بك"])};fn.source="أهلا بك";return fn;})()
},}),})
  nuxtI18nOptions.vueI18n = await vueI18nOptionsLoader(context)
  nuxtI18nOptions.locales = [Object({"code":"en","iso":"en-US","file":"en.js"}),Object({"code":"ar","iso":"ar-EG","file":"ar.js"})]
  nuxtI18nOptions.defaultLocale = "en"
  nuxtI18nOptions.defaultDirection = "ltr"
  nuxtI18nOptions.routesNameSeparator = "___"
  nuxtI18nOptions.trailingSlash = false
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default"
  nuxtI18nOptions.strategy = "prefix_except_default"
  nuxtI18nOptions.lazy = false
  nuxtI18nOptions.langDir = null
  nuxtI18nOptions.rootRedirect = null
  nuxtI18nOptions.detectBrowserLanguage = Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true})
  nuxtI18nOptions.differentDomains = false
  nuxtI18nOptions.baseUrl = ""
  nuxtI18nOptions.dynamicRouteParams = false
  nuxtI18nOptions.customRoutes = "page"
  nuxtI18nOptions.pages = Object({})
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false
  nuxtI18nOptions.onBeforeLanguageSwitch = (() => "")
  nuxtI18nOptions.onLanguageSwitched = (() => null)
  nuxtI18nOptions.types = undefined
  nuxtI18nOptions.debug = false
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = Object({vueI18n: undefined,locales: [],defaultLocale: "",defaultDirection: "ltr",routesNameSeparator: "___",trailingSlash: false,defaultLocaleRouteNameSuffix: "default",strategy: "prefix_except_default",lazy: false,langDir: null,rootRedirect: null,detectBrowserLanguage: Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true}),differentDomains: false,baseUrl: "",dynamicRouteParams: false,customRoutes: "page",pages: Object({}),skipSettingLocaleOnNavigate: false,onBeforeLanguageSwitch: (() => ""),onLanguageSwitched: (() => null),types: undefined,debug: false})

export const nuxtI18nInternalOptions = Object({__normalizedLocales: [Object({"code":"en","iso":"en-US","file":"en.js"}),Object({"code":"ar","iso":"ar-EG","file":"ar.js"})]})
export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const isSSG = false
export const isSSR = true
