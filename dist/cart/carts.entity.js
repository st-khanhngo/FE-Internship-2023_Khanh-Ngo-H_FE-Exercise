import Cart from "./cart.entity.js";
class Carts {
    constructor(cart) {
        this.cartTotalPrice = () => {
            return this.cart.reduce((total, item) => total + item.finalPrice * item.quantity, 0).toFixed(2);
        };
        this.cartTotalItem = () => {
            return this.cart.reduce((total, item) => total + item.quantity, 0);
        };
        this.cart = cart.map(c => new Cart(c));
    }
}
export default Carts;
