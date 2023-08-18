import { addCartItem, deleteCartItem, reduceCartItem } from "./cart.js";
import Cart from "./cart/cart.entity.js";
import CartItem from "./cart/cartItem.entity.js";
import { StorageKey, getLocalStorage } from "./services/localStorage.service.js";
const getCartStorage = () => {
    const cartStorage = getLocalStorage(StorageKey.CART);
    return cartStorage;
};
const cartList = () => {
    var _a;
    if ((_a = getCartStorage()) === null || _a === void 0 ? void 0 : _a.length) {
        const cart = new Cart(getCartStorage().map((cart) => new CartItem(cart))).cartList;
        return `
    <ul class="cart-list">
    ${cart.map((item) => `
      <li class="cart-item">
        <div class="cart row ${item.discount ? "product-discount" : ""}">
          <div class="cart-info col col-4">
            <h4>${item.name}</h4>
            ${item.discount ? `<span class="badge badge-danger">-${item.discount}%</span>` : ""}
            <img class="cart-img" src =${item.imageUrl}>
          </div>
          <div class="btn-wrapper cart-action col col-4">
          <button class="btn btn-reduce" data-index=${item.id} data-id=${item.quantity - 1}>-</button>
          <span>${item.quantity}</span>
            <button class="btn btn-add" data-index=${item.id} data-id=${item.quantity + 1}>+</button>
            <button class="btn btn-delete" data-index=${item.id}>Delete</button>
          </div>
          <div class="cart-price col col-4">
            <div class="price-wrapper">
              <span class="product-price">${item.price}</span>
              ${item.discount ? `<span class="product-price-discount">${item.finalPrice}</span>` : ''}
            </div>
            <p>Total: <span class="product-price">${item.itemTotalPrice(item.price, item.quantity)}</span></p>        
          </div>
        </div>
      </li>
    `).join('')}
    <span>TOTAL CART PRICE: ${getCartStorage().reduce((sum, item) => sum, 0)}</span>
    </ul>`;
    }
};
export const loadCart = () => {
    const cartWrapper = document.querySelector('.section-cart .container');
    if (cartWrapper && getCartStorage().length) {
        cartWrapper.innerHTML = cartList();
    }
    else if (cartWrapper) {
        cartWrapper.innerHTML = `CART EMPTY`;
    }
    // const changeQuantities : NodeListOf<HTMLElement> = document.querySelectorAll('.btn-change');
    // changeQuantities.forEach((item) => item.addEventListener('click', () => changeCartQuantity(item, parseInt(item.dataset.id))))
    const addItem = document.querySelectorAll('.btn-add');
    addItem.forEach((item) => item.addEventListener('click', () => addCartItem(item)));
    const reduceItem = document.querySelectorAll('.btn-reduce');
    reduceItem.forEach((item) => item.addEventListener('click', () => reduceCartItem(item)));
    const deleteItem = document.querySelectorAll('.btn-delete');
    deleteItem.forEach((item) => item.addEventListener('click', () => deleteCartItem(item)));
};
