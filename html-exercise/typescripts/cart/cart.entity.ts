import CartItem from "./cartItem.entity";

class Cart {
  cartList : CartItem[];

  constructor(cartList: CartItem[]) {
    this.cartList = cartList;
  }

  cartTotalPrice = () => {
    // return this.cartList.reduce((total, item) => total + item.totalPrice, 0);
  }

  cartTotalItem = () => {
    return this.cartList.reduce((total, item) => total + item.quantity, 0);
  }
}

export default Cart
