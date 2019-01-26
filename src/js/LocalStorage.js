
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
  window.localStorage.getItem(key)
}
