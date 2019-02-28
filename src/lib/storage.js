const get = (key) => {
  try {
    const json = window.localStorage.getItem(key)
    return JSON.parse(json)
  } catch (e) {
    return null
  }
}

const set = (key, value) => {
  const json = JSON.stringify(value)
  window.localStorage.setItem(key, json)
}

export default { get, set }