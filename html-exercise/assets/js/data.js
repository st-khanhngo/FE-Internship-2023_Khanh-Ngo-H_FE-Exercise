import { Product } from "./entity.js";

const product1 = new Product(1, 'T-Shirt Summer Vibes', 'assets/images/product-1.png', 119.99, 30);
const product2 = new Product(2, 'Loose Knit 3/4 Sleeve', 'assets/images/product-2.png', 119.99);
const product3 = new Product(3, 'Basic Slim Fit T-Shirt', 'assets/images/product-3.png', 79.99);
const product4 = new Product(4, 'Loose Textured T-Shirt', 'assets/images/product-4.png', 119.99);

const productList = [product1, product2, product3, product4];

export default productList;
