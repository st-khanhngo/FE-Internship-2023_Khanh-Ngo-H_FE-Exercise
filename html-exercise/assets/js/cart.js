import productList from './data.js';
import { CartItem } from './entity.js';
import { loadCart } from './renderCart.js';

const cartStorage = JSON.parse(localStorage.getItem('cart')) || [];

// Add a product to cart
const addCartItem = (btnClick) => {
  const productIndex = Number.parseInt(btnClick?.getAttribute('data-index'));
  const product = productList.find((prod) => prod.id === productIndex);
  const found = cartStorage.find((item) => item.id === productIndex);
  if (found) {
    found.quantity++;
  } else {
    const cart = new CartItem(1, product);
    cartStorage.push(cart);
  }
  localStorage.setItem('cart', JSON.stringify(cartStorage));
  setCart();
}

// Reduce a product quantity in cart 
const reduceCartItem = (btnClick) => {
  const productIndex = Number.parseInt(btnClick?.getAttribute('data-index'));
  const found = cartStorage.find((item) => item.id === productIndex);
  if (found.quantity > 1) {
    found.quantity--;
  } else {
    const index = cartStorage.indexOf(found);
    cartStorage.splice(index, 1);
  }
  localStorage.setItem('cart', JSON.stringify(cartStorage));
  setCart();
}

const deleteCartItem = (btnClick) => {
  const productIndex = Number.parseInt(btnClick?.getAttribute('data-index'));
  const index = cartStorage.findIndex((item) => item.id === productIndex);
  cartStorage.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cartStorage));
  setCart();
}

// Display total item in cart
const setCart = () => {
  const cartDisplay = document.querySelector('.badge-cart');
  const cartTotal = cartStorage?.reduce((sum, item) => sum + item.quantity, 0);
  if (cartTotal) {
    cartDisplay.innerHTML = cartTotal;
    cartDisplay.style.display = 'block';
  } else {
    cartDisplay.style.display = 'none';
  }
  loadCart();
}

export { addCartItem, reduceCartItem, deleteCartItem, setCart }
