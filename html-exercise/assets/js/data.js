import { Product } from './entity.js';

const products = [
  {
    id: 1,
    name: 'T-Shirt Summer Vibes',
    imageUrl: 'assets/images/product-1.png',
    price: '119.99',
    discount: 30
  },
  {
    id: 2,
    name: 'Loose Knit 3/4 Sleeve',
    imageUrl: 'assets/images/product-2.png',
    price: '119.99',
    discount: 0
  },
  {
    id: 3,
    name: 'Basic Slim Fit T-Shirt',
    imageUrl: 'assets/images/product-3.png',
    price: '79.99',
    discount: 0
  },
  {
    id: 4,
    name: 'Loose Textured T-Shirt',
    imageUrl: 'assets/images/product-4.png',
    price: '119.99',
    discount: 0
  },
]

const productList = products.map((prod) => new Product(prod));

export default productList;
