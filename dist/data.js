let productList = [];
async function getApi(url) {
    const p = (await fetch(url)).json();
    return p;
}
const getProductsList = async () => {
    return productList = await getApi('/html-exercise/productList.json');
};
productList = await getProductsList();
export { productList };
