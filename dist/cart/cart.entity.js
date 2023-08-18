class Cart {
    constructor(cartList) {
        this.cartTotalPrice = () => {
            // return this.cartList.reduce((total, item) => total + item.totalPrice, 0);
        };
        this.cartTotalItem = () => {
            return this.cartList.reduce((total, item) => total + item.quantity, 0);
        };
        this.cartList = cartList;
    }
}
export default Cart;
