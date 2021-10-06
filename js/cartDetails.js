let products = JSON.parse(localStorage.getItem("products"));
let productsID = localStorage.getItem("id");
let itemDom = document.querySelector(".item-detials");

let productDetails = products.find((item) => item.id ==productsID);

itemDom.innerHTML = `
<img src="${productDetails.imageUrl}" alt="">
<h2>${productDetails.title}</h2>
<span>Size: ${productDetails.size}</span><br>
<span>Quantity: ${productDetails.qty}</span>
`
