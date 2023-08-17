import { addCartItem, reduceCartItem, deleteCartItem } from "./cart.js";

export const getCart = () => {
  const cartStorage = JSON.parse(localStorage.getItem('cart')) || [];
  return cartStorage.map(item => ({
    ...item,
    total: ((item.discount ? (item.price * (100 - item.discount) / 100) : item.price) * item.quantity).toFixed(2),
  }))
}

const cartList = () => {
  if (getCart()?.length) {
    return `
    <ul class="cart-list">
    ${getCart().map((item) => `
      <li>
        ${item.discount ? `<span>${item.discount}</span>` : ""}
        <h4>${item.name}</h4>
        <img src =${item.imageUrl}>
        <div>
        <span>Price: ${item.price}</span>
        <span>${item.discount ? `Discounted price:` + (item.price * (100 - item.discount) / 100).toFixed(2) : ''}</span>
        <span>Quantity: ${item.quantity}</span>
        <span>Total: ${item.total}</span>        
      </div>
        <div className="btn-wrapper">
          <button class="btn btn-add" data-index=${item.id}>+</button>
          <button class="btn btn-reduce" data-index=${item.id}>-</button>
          <button class="btn btn-delete" data-index=${item.id}>Delete</button>
        </div>
      </li>
    `).join('')}
    <span>TOTAL CART PRICE: ${getCart().reduce((sum, item) => sum + Number.parseFloat(item.total), 0).toFixed(2)}</span>
    </ul>`
  }
}

export const loadCart = () => {
  const cartWrapper = document.querySelector('.section-cart .container');
  if (cartWrapper) {
    cartWrapper.innerHTML = cartList();
  }

  const addItem = document.querySelectorAll('.btn-add');
  addItem.forEach((item) => item.addEventListener('click', () => addCartItem(item)))

  const reduceItem = document.querySelectorAll('.btn-reduce');
  reduceItem.forEach((item) => item.addEventListener('click', () => reduceCartItem(item)))

  const deleteItem = document.querySelectorAll('.btn-delete');
  deleteItem.forEach((item) => item.addEventListener('click', () => deleteCartItem(item)))
}
