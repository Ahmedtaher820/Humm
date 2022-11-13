import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "new-postion-layout"
declare module "D:/tasks/Humm-App/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}