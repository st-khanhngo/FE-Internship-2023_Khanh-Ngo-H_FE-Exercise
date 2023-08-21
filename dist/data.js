import Product from "./product/product.entity.js";
let productList = [];
async function getApi(url) {
	const p = (await fetch(url)).json();
	return p;
}
const getProductsList = async () => {
	const list = await getApi('/html-exercise/productList.json');
	return productList = list.map(item => new Product(item));
};
productList = await getProductsList();
export { productList };
