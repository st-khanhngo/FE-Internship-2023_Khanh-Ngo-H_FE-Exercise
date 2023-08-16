import productList from "./data.js";

const sectionProduct = document.querySelectorAll('.section-product .container');

const productItem = () => {
  return (
    `<ul class="product-list row">
    ${productList.map(product =>
      `<li class="product-item col col-3 col-sm-6">
        <div class="product ${product.discount > 0 ? "product-discount" : ""}" >
        <button class="btn btn-primary btn-cart" data-index=${product.id}>ADD TO CART</button>
          <a class="product-link" href="">
            ${product.discount ? `<span class="badge badge-danger">-${product.discount}%</span>` : ""}      
            <img class="product-img" src="${product.imageUrl}" alt="${product.name}">
            <h4 class="product-title">${product.name}</h4>
            <div class="price-wrapper flex">
              ${product.discount ? `<span class="product-price-discount">${product.price * (100 - product.discount) / 100}</span>` : ""}
              <span class="product-price">${product.price}</span>
            </div>
          </a>
        </div >
      </li>`).join('')}
    </ul>`
  )
}

export const loadProducts = () => {
  if (sectionProduct?.length) {
    sectionProduct.forEach((section) => {
      section.innerHTML = productItem();
    })
  }
}
