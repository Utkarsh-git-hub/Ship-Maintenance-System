export function load(key, fallback) {
  const v = localStorage.getItem(key)
  return v ? JSON.parse(v) : fallback
}
export function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}
