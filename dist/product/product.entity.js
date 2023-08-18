class Product {
    constructor(product) {
        this.discount = 0;
        const { id, name, imageUrl, price, discount, status } = product;
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.discount = discount;
        if (discount) {
            this.discount = discount;
        }
        this.status = status;
    }
}
export default Product;
