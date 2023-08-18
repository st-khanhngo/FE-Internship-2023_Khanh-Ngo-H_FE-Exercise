import Product from "../product/product.entity.js";
import { endpoints } from "./apiUrl.js";

let productList: Product[] = [];

async function getApi(url: string) {
  const p = (await fetch(url)).json();
  return p;
}

const getProductsList = async ()  => {
  const list : Product[] = await getApi(endpoints.PRODUCTS);
  return productList = list.map(item => new Product(item));
};

productList = await getProductsList();

export default productList
