import Product from '../product/product.entity.js';
import { endpoints } from './apiUrl.js';

async function getApi(url: string) {
  return (await fetch(url)).json();
}

const getProductsList = async ()  => {
  const list : Product[] = await getApi(endpoints.PRODUCTS);
  return list.map(item => new Product(item));
};

export default getProductsList
