import productList from "./api/apiHandle.js";
import CartItem from "./cart/cartItem.entity.js";
import { loadCart } from "./renderCart.js";
import { StorageKey, getLocalStorage, saveToLocalStorage } from "./services/localStorage.service.js";
const cartStorage = getLocalStorage(StorageKey.CART);
// Change cart item quantity
const changeCartQuantity = (btnClick, quantity) => {
    const productIndex = parseInt(btnClick === null || btnClick === void 0 ? void 0 : btnClick.getAttribute('data-index'));
    const product = productList.find((prod) => prod.id === productIndex);
    const cartItem = cartStorage.find((item) => (item === null || item === void 0 ? void 0 : item.id) === productIndex);
    if (quantity > 0) {
        cartItem.quantity = quantity;
    }
    else {
        deleteCartItem(btnClick);
    }
    saveToLocalStorage(StorageKey.CART, cartStorage);
    setCart();
};
// Add a product to cart
const addCartItem = (btnClick) => {
    const productIndex = parseInt(btnClick === null || btnClick === void 0 ? void 0 : btnClick.getAttribute('data-index'));
    const product = productList.find((prod) => prod.id === productIndex);
    const cartItem = cartStorage.find((item) => (item === null || item === void 0 ? void 0 : item.id) === productIndex);
    if (cartItem) {
        changeCartQuantity(btnClick, cartItem.quantity + 1);
    }
    else {
        const cart = new CartItem(Object.assign(Object.assign({}, product), { quantity: 1 }));
        cartStorage.push(cart);
    }
    saveToLocalStorage(StorageKey.CART, cartStorage);
    setCart();
};
const deleteCartItem = (btnClick) => {
    const productIndex = Number.parseInt(btnClick === null || btnClick === void 0 ? void 0 : btnClick.getAttribute('data-index'));
    const index = cartStorage.findIndex((item) => item.id === productIndex);
    if (confirm(`Do you want to delete this item?`)) {
        cartStorage.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cartStorage));
        setCart();
    }
};
// Display total item in cart
const setCart = () => {
    const cartDisplay = document.querySelector('.badge-cart');
    const cartTotal = cartStorage === null || cartStorage === void 0 ? void 0 : cartStorage.reduce((sum, item) => sum + item.quantity, 0);
    if (cartTotal) {
        cartDisplay.innerHTML = `${cartTotal}`;
        cartDisplay.style.display = 'block';
    }
    else {
        cartDisplay.style.display = 'none';
    }
    loadCart();
};
export { addCartItem, deleteCartItem, setCart, changeCartQuantity };
