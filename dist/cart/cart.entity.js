class CartItem {
    constructor(cartItem) {
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
