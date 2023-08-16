class Product {
  constructor(id, name, imageUrl, price, discount = 0) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.discount = discount;
  }
}

class CartItem extends Product {
  constructor(quantity, ...product) {
    super(...product);
    this.quantity = quantity;
  }
}

export { Product, CartItem }
