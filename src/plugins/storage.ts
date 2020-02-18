import { PluginObject } from 'vue'

import storage from '../utils/storage'

const Storage: PluginObject<never> = {
  install (Vue) {
    Object.defineProperty(Vue.prototype, '$storage', {
      get: () => storage
    })
  }
}

export default Storage
