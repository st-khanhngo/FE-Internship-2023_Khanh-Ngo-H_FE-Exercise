enum StorageKey {
  CART = 'cart'
}

function saveToLocalStorage<T>(key: string, data: T) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getLocalStorage<T>(key: string) : T {
  return JSON.parse(localStorage.getItem(key));
}

export {StorageKey, saveToLocalStorage, getLocalStorage}
