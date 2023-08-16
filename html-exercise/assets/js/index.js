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

var sectionProduct = document.querySelectorAll('.section-product .container');

var cartWrapper = document.querySelectorAll('.action-item')[1];
var cartPopup = document.createElement('span');

//  Render product list
function loadProducts() {
  if (sectionProduct?.length) {
    sectionProduct.forEach(section => {
      var list = document.createElement('ul');
      list.className = 'product-list row';
      section.appendChild(list);

      products.forEach(prod => {
        var productItem = document.createElement('li');
        productItem.className = 'product-item col col-3 col-sm-6';
        list.appendChild(productItem);

        var product = document.createElement('div');
        product.className = 'product';
        productItem.appendChild(product);

        var btnAddToCart = document.createElement('button');
        btnAddToCart.innerHTML = 'ADD TO CART';
        btnAddToCart.className = 'btn btn-primary btn-cart';
        btnAddToCart.addEventListener('click', function () {
          addToCart(prod);
        })

        var productLink = document.createElement('a');
        productLink.className = 'product-link';
        product.append(btnAddToCart, productLink);

        var badge = document.createElement('span');
        if (prod.discount) {
          product.classList.add('product-discount');
          badge.innerHTML = '-' + prod.discount + '%';
          badge.className = 'badge badge-danger';
        }

        var productImg = document.createElement('img');
        productImg.src = prod.imageUrl;
        productImg.alt = prod.name;
        productImg.className = 'product-img';

        var productTitle = document.createElement('h4');
        productTitle.innerHTML = prod.name;
        productTitle.className = 'product-title';

        productLink.append(badge, productImg, productTitle, loadPrice(prod));
      });
    });
  }
}

// Display product price 
function loadPrice(product) {
  var priceWrapper = document.createElement('div');
  priceWrapper.className = 'price-wrapper';

  var productPrice = document.createElement('span');
  productPrice.innerHTML = product.price;
  productPrice.className = 'product-price';

  var priceDiscount = document.createElement('span');
  if (product.discount) {
    priceDiscount.innerHTML = (product.price * (100 - product.discount) / 100).toFixed(2);
    priceDiscount.className = 'product-price-discount';
    priceWrapper.classList.add('flex');
  }

  priceWrapper.append(priceDiscount, productPrice);
  return priceWrapper;
}

// Add a product to cart
function addToCart(product) {
  var cartStorage = JSON.parse(localStorage.getItem('cart')) || [];

  var found = cartStorage.find(function (item) {
    return item.id === product.id;
  })
  if (found) {
    found.count++;
  } else {
    cartStorage.push({ id: product.id, count: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cartStorage));
  setCartPopup();
}

// Display total item in cart
function setCartPopup() {
  var cartTotal = JSON.parse(localStorage.getItem('cart'))?.reduce(function (sum, item) {
    return sum + item.count;
  }, 0);

  if (cartTotal) {
    cartPopup.innerHTML = cartTotal;
    cartPopup.className = 'badge badge-danger badge-cart';
    cartWrapper.appendChild(cartPopup);
  }
}

loadProducts();
setCartPopup();
