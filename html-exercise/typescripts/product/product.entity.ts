import {ProductProps, ProductStatus} from "./product.interface.js";

class Product implements ProductProps {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  discount?: number = 0;
  status: string;

  constructor(product: ProductProps) {
    const { id, name, imageUrl, price, discount, status } = product;
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.discount = discount;
    if(discount) {
      this.discount = discount;
    }
    this.status = ProductStatus[status];
  }
}

export default Product
