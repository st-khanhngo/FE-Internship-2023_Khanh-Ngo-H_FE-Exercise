import CartItem from "./cart/cart.entity.js";
import { productList } from "./data.js";
import { loadCart } from "./renderCart.js";
const cartStorage = JSON.parse(localStorage.getItem('cart')) || [];
// Add a product to cart
const addCartItem = (btnClick) => {
    const productIndex = parseInt(btnClick === null || btnClick === void 0 ? void 0 : btnClick.getAttribute('data-index'));
    const product = productList.find((prod) => prod.id === productIndex);
    const cartItem = cartStorage.find((item) => (item === null || item === void 0 ? void 0 : item.id) === productIndex);
    if (cartItem) {
        cartItem.quantity++;
    }
    else {
        const cart = new CartItem(Object.assign(Object.assign({}, product), { quantity: 1 }));
        cartStorage.push(cart);
    }
    localStorage.setItem('cart', JSON.stringify(cartStorage));
    setCart();
};
// Reduce a product quantity in cart 
const reduceCartItem = (btnClick) => {
    const productIndex = Number.parseInt(btnClick === null || btnClick === void 0 ? void 0 : btnClick.getAttribute('data-index'));
    const cartItem = cartStorage.find((item) => item.id === productIndex);
    if (cartItem.quantity > 1) {
        cartItem.quantity--;
    }
    else {
        deleteCartItem(btnClick);
    }
    localStorage.setItem('cart', JSON.stringify(cartStorage));
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
export { addCartItem, reduceCartItem, deleteCartItem, setCart };
