import productList from './data.js';
import { CartItem } from './entity.js';

// Add a product to cart
function addToCart() {
  const cartBtn = document.querySelectorAll('.btn-cart');
  cartBtn.forEach(btn => btn.addEventListener('click', () => {
    const productIndex = Number.parseInt(btn.getAttribute('data-index'));
    const product = productList.find((prod) => prod.id === productIndex);

    const cartStorage = JSON.parse(localStorage.getItem('cart')) || [];

    const found = cartStorage.find((item) => item.id === productIndex)
    if (found) {
      found.quantity++;
    } else {
      const cart = new CartItem(1, ...Object.values(product));
      cartStorage.push(cart);
    }
    localStorage.setItem('cart', JSON.stringify(cartStorage));
    setCartPopup();
  }))

}

// Display total item in cart
function setCartPopup() {
  const cartWrapper = document.querySelectorAll('.action-item')[1];
  const cartTotal = JSON.parse(localStorage.getItem('cart'))?.reduce((sum, item) => sum + item.quantity, 0);
  if (cartTotal) {
    cartWrapper.innerHTML += `<span class="badge badge-danger badge-cart">${cartTotal}</span>`
  }
}

export { addToCart, setCartPopup }
