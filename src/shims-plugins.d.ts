import storage from './utils/storage'

declare module 'vue/types/vue' {
  interface Vue {
    $storage: typeof storage
  }
}
