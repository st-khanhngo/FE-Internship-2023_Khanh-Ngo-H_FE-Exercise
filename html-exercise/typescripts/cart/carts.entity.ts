import Cart from "./cart.entity.js";

class Carts {
  cart : Cart[];

  constructor(cart: Cart[]) {
    this.cart = cart.map(c => new Cart(c));
  }

  cartTotalPrice = () => {
    return this.cart.reduce((total, item) => total + item.finalPrice * item.quantity, 0).toFixed(2);
  }

  cartTotalItem = () => {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }
}

export default Carts;
