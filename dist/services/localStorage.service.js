var StorageKey;
(function (StorageKey) {
	StorageKey["CART"] = "cart";
})(StorageKey || (StorageKey = {}));
function saveToLocalStorage(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}
function getLocalStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}
export { StorageKey, saveToLocalStorage, getLocalStorage };
