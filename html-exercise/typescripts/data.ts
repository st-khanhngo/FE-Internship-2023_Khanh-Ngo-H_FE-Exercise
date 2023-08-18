import Product from "./product/product.entity.js";

let productList: Product[] = [];

async function getApi(url: string) {
  const p = (await fetch(url)).json();
  return p;
}

const getProductsList = async ()  => {
  return productList = await getApi('/html-exercise/productList.json');
};

productList = await getProductsList();

export { productList }
