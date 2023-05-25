const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const product = data.find(item => item.id.toString() === productId);

const productName = document.getElementById('Name');
const productPrice = document.getElementById('Price');
const productImage = document.getElementById('Image');
if (product) {
  productName.innerText = product.name;
  productPrice.innerText = `$${product.price}`;
  productImage.src = product.image;
}
