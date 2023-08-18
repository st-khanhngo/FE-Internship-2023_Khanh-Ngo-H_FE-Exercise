import Product from "../product/product.entity.js";
import { endpoints } from "./apiUrl.js";
let productList = [];
async function getApi(url) {
    const p = (await fetch(url)).json();
    return p;
}
const getProductsList = async () => {
    const list = await getApi(endpoints.PRODUCTS);
    return productList = list.map(item => new Product(item));
};
productList = await getProductsList();
export default productList;
