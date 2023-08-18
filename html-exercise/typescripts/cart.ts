import productList from "./api/apiHandle.js";
import Cart from "./cart/cart.entity.js";
import CartItem from "./cart/cartItem.entity.js";
import Product from "./product/product.entity.js";
import { loadCart } from "./renderCart.js";

const cartStorage : CartItem[] = JSON.parse(localStorage.getItem('cart')) || [];

// Change cart item quantity
const changeCartQuantity = (btnClick: HTMLElement, quantity: number) => {
  const productIndex : number = parseInt(btnClick?.getAttribute('data-index'));
  const product : Product = productList.find((prod) => prod.id === productIndex);
  const cartItem : CartItem = cartStorage.find((item) => item?.id === productIndex);    

  if (!cartItem) {
    const cart = new CartItem({...product, quantity: 1});
    cartStorage.push(cart);
  } else {
    cartItem.quantity = quantity;
    // cartItem.totalPrice = cartItem.itemTotalPrice(cartItem.finalPrice, cartItem.quantity);
  }
}

// Add a product to cart
const addCartItem = (btnClick : HTMLElement) => {
  const productIndex : number = parseInt(btnClick?.getAttribute('data-index'));
  const product : Product = productList.find((prod) => prod.id === productIndex);
  const cartItem : CartItem = cartStorage.find((item) => item?.id === productIndex);    
  if (cartItem) {
    cartItem.quantity++;
    // cartItem.totalPrice = cartItem.itemTotalPrice(cartItem.finalPrice, cartItem.quantity);
  } else {
    const cart = new CartItem({...product, quantity: 1});
    cartStorage.push(cart);
  }
  localStorage.setItem('cart', JSON.stringify(cartStorage));
  setCart();
}

// Reduce a product quantity in cart 
const reduceCartItem = (btnClick : HTMLElement) => {
  const productIndex : number = Number.parseInt(btnClick?.getAttribute('data-index'));
  const cartItem : CartItem = cartStorage.find((item) => item.id === productIndex);
  if (cartItem.quantity > 1) {
    cartItem.quantity--;
  } else {
    deleteCartItem(btnClick);
  }
  localStorage.setItem('cart', JSON.stringify(cartStorage));
  setCart();
}

const deleteCartItem = (btnClick : HTMLElement) => {
  const productIndex : number = Number.parseInt(btnClick?.getAttribute('data-index'));
  const index : number = cartStorage.findIndex((item) => item.id === productIndex);
  if (confirm(`Do you want to delete this item?`)) {
    cartStorage.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartStorage));
    setCart();
  }
}

// Display total item in cart
const setCart = () => {
  const cartDisplay: HTMLElement = document.querySelector('.badge-cart');
  const cartTotal : number = cartStorage?.reduce((sum, item) => sum + item.quantity, 0);
  if (cartTotal) {
    cartDisplay.innerHTML = `${cartTotal}`;
    cartDisplay.style.display = 'block';
  } else {
    cartDisplay.style.display = 'none';
  }
  loadCart();
}

export { addCartItem, reduceCartItem, deleteCartItem, setCart, changeCartQuantity }
