import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "D:/my work/Documents/safwat-nuxt-frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}