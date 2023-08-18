import {ProductProps, productStatus} from "./product.interface";

class Product implements ProductProps {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  discount?: number = 0;
  status: productStatus;

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
    this.status = status;
  }
}

export default Product
