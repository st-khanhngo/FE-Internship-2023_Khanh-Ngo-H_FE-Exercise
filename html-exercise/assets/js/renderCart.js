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
      <li class="cart-item">
        <div class="cart row ${item.discount ? "product-discount" : ""}">
          <div class="cart-info col col-4">
            <h4>${item.name}</h4>
            ${item.discount ? `<span class="badge badge-danger">-${item.discount}%</span>` : ""}
            <img class="cart-img" src =${item.imageUrl}>
          </div>
          <div class="btn-wrapper cart-action col col-4">
          <button class="btn btn-reduce" data-index=${item.id}>-</button>
          <span>${item.quantity}</span>
            <button class="btn btn-add" data-index=${item.id}>+</button>
            <button class="btn btn-delete" data-index=${item.id}>Delete</button>
          </div>
          <div class="cart-price col col-4">
            <div class="price-wrapper">
              <span class="product-price">${item.price}</span>
              ${item.discount ? `<span class="product-price-discount">${(item.price * (100 - item.discount) / 100).toFixed(2)}</span>` : ''}
            </div>
            <p>Total: <span class="product-price">${item.total}</span></p>        
          </div>
        </div>
      </li>
    `).join('')}
    <span>TOTAL CART PRICE: ${getCart().reduce((sum, item) => sum + Number.parseFloat(item.total), 0).toFixed(2)}</span>
    </ul>`
  }
}

export const loadCart = () => {
  const cartWrapper = document.querySelector('.section-cart .container');
  if (cartWrapper && getCart().length) {
    cartWrapper.innerHTML = cartList();
  } else {
    cartWrapper.innerHTML = `CART EMPTY`
  }

  const addItem = document.querySelectorAll('.btn-add');
  addItem.forEach((item) => item.addEventListener('click', () => addCartItem(item)))

  const reduceItem = document.querySelectorAll('.btn-reduce');
  reduceItem.forEach((item) => item.addEventListener('click', () => reduceCartItem(item)))

  const deleteItem = document.querySelectorAll('.btn-delete');
  deleteItem.forEach((item) => item.addEventListener('click', () => deleteCartItem(item)))
}
