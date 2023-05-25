const Page = document.getElementById('Page');

data.forEach(item => {
  const dataItem = document.createElement('div');
  dataItem.classList.add('product');
  dataItem.setAttribute('data-id', item.id);
  dataItem.innerHTML = `
    <img src="${item.image}" />
    <h3>${item.name}</h3>
    <p>$${item.price}</p>
  `;
  Page.appendChild(dataItem);
});

const clickBtn = (event) => {
   if (event.target.matches('.product')) {
     const productId = event.target.dataset.id;
     window.location.href = `product.html?id=${productId}`;
   }
 };
Page.addEventListener('click', clickBtn);
 
