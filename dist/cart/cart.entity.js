class Cart {
    constructor(cartList) {
        this.cartTotalPrice = () => {
            return this.cartList.reduce((total, item) => total + item.finalPrice * item.quantity, 0).toFixed(2);
        };
        this.cartTotalItem = () => {
            return this.cartList.reduce((total, item) => total + item.quantity, 0);
        };
        this.cartList = cartList;
    }
}
export default Cart;
