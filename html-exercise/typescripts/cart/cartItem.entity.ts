import CartItemProps from "./cartItem.interface";

class CartItem implements CartItemProps {
  quantity: number;
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  discount?: number = 0;
  finalPrice: number;

  constructor(cartItem: CartItemProps) {
    const { id, name, imageUrl, price, discount, quantity } = cartItem;
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.quantity = quantity;
    this.price = price;
    this.discount = discount || 0 ;
    this.finalPrice = discount ? (price - ((price * discount) / 100)) : price;
  }

  itemTotalPrice = (price:number, quantity:number) => {
    return parseFloat((price * quantity).toFixed(2));
  }
}

export default CartItem;
