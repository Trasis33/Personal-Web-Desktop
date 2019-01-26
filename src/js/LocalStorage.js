
export function hasLocalStorage () {
  if (window.localStorage) {
    console.log('local storage is yes!')
  } else {
    console.log('local storage is no :(')
  }
}

export function setUsername (key, value) {
  window.localStorage.setItem(key, value)
}

export function getUsername (key) {
  return window.localStorage.getItem(key)
}

export function hasUsername () {
  if (window.localStorage.length > 0) {
    return true
  } else {
    return false
  }
}
