class CartItem {
    constructor(cartItem) {
        this.discount = 0;
        this.itemTotalPrice = (price, quantity) => {
            return parseFloat((price * quantity).toFixed(2));
        };
        const { id, name, imageUrl, price, discount, quantity } = cartItem;
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.quantity = quantity;
        this.price = price;
        this.discount = discount || 0;
        this.finalPrice = discount ? (price - ((price * discount) / 100)) : price;
    }
}
export default CartItem;
