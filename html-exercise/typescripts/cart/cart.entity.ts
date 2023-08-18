import CartItemProps from "./cart.interface";

class CartItem implements CartItemProps {
  quantity: number;
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  discount: number;

  constructor(cartItem: CartItemProps) {
    const { id, name, imageUrl, price, discount, quantity } = cartItem;
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.discount = discount;
    this.quantity = quantity;
  }
}

export default CartItem;
