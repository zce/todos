export default {
  get<T> (key: string): T | null {
    const json = localStorage.getItem(key)
    if (!json) {
      return null
    }
    try {
      return JSON.parse(json) as T
    } catch (e) {
      return null
    }
  },

  set<T> (key: string, value: T) {
    const json = JSON.stringify(value)
    localStorage.setItem(key, json)
  }
}
