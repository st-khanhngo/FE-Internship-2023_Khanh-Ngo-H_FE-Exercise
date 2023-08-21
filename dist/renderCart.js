import { changeCartQuantity, deleteCartItem } from "./cart.js";
import Carts from "./cart/carts.entity.js";
import { StorageKey, getLocalStorage } from "./services/localStorage.service.js";
const getCartStorage = () => {
  return getLocalStorage(StorageKey.CART) || [];
};
const cartList = () => {
  var _a;
  if ((_a = getCartStorage()) === null || _a === void 0 ? void 0 : _a.length) {
    const carts = new Carts(getCartStorage());
    const cart = carts.cart;
    return `
    <ul class="cart-list">
    ${cart.map((item) => `
      <li class="cart-item">
        <div class="cart row ${item.discount ? "product-discount" : ""}">
          <a class="cart-info col col-4" href="">
            <h4>${item.name}</h4>
            <img class="cart-img" src =${item.imageUrl}>
          </a>
          <div class="btn-wrapper cart-action col col-4">
          <button class="btn btn-change" data-index=${item.id} data-id=${item.quantity - 1}>-</button>
          <span>${item.quantity}</span>
            <button class="btn btn-change" data-index=${item.id} data-id=${item.quantity + 1}>+</button>
            <button class="btn btn-delete" data-index=${item.id}>DELETE</button>
          </div>
          <div class="cart-price col col-4">
            <div class="price-wrapper">
              <span class="product-price">${item.price}</span>
              ${item.discount ? `<span class="product-price-discount">${item.finalPrice}</span>` : ''}
            </div>
            <p class="price-total">Total: <span class="product-price">${item.itemTotalPrice(item.price, item.quantity)}</span></p>        
          </div>
        </div>
      </li>
    `).join('')}
    </ul>
    <p class="cart-total">TOTAL CART PRICE: $${carts.cartTotalPrice()}</p>
    `;
  }
};
export const loadCart = () => {
  const cartWrapper = document.querySelector('.section-cart .container');
  if (cartWrapper && getCartStorage().length) {
    cartWrapper.innerHTML = cartList();
  }
  else if (cartWrapper) {
    cartWrapper.innerHTML = `
    <div class="section section-cart cart-empty">
      <h3 class="section-header">CART IS EMPTY</h3>
      <a class="btn btn-primary">Continue Shopping</a>
    </div>
    `;
  }
  const changeQuantities = document.querySelectorAll('.btn-change');
  changeQuantities.forEach((item) => item.addEventListener('click', () => changeCartQuantity(item, parseInt(item.dataset.id))));
  const deleteItem = document.querySelectorAll('.btn-delete');
  deleteItem.forEach((item) => item.addEventListener('click', () => deleteCartItem(item)));
};
