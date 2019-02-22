export function parseStorage (name, type) {
  let data = type === 'sessionStorage' ? sessionStorage.getItem(name) : localStorage.getItem(name)
  if (!data) return null
  if (String(data) === 'null') return null
  try {
    return JSON.parse(data)
  } catch {
    return data
  }
}
// set sessionStorage data
export function setSessionStorage (name, data) {
  if (!name) {
    throw new Error('need name')
  }
  let needStringify = typeof data === 'object'
  let storageData = needStringify ? JSON.stringify(data) : data
  return sessionStorage.setItem(name, storageData)
}
// get sessionStorage data
export function getSessionStorage (name, noParse) {
  if (noParse) return localStorage.getItem(name)
  return parseStorage(name, 'sessionStorage')
}
