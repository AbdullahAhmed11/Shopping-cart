let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".no-product")


// define product function 
function drewCartProductsUI (allProducts = []) {
    
    let products = JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
    let productsUI = products.map( (item) => {
        return `
        <div class="product-item">
            <img src="${item.imageUrl}" alt="" class="product-item-img">

            <div class="product-item-desc">
            <a href="cartDetails.html">${item.title}</a>
            <p>${item.desc}</p>
                <span>Size: ${item.size}</span><br>
                <span>Quantity: ${item.qty}</span><br>
                <span>Price: ${item.price}</span><br>
                <span>Total price: ${item.price * item.qty}</span>
                
            </div>
            <div class="product-item-action">
                <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">Remove from cart</button>
            </div>
        </div>
        `
    })

    productsDom.innerHTML = productsUI.join("");

}
drewCartProductsUI();

//remove item from cart
function removeItemFromCart (id)  {
    let productsInCart = localStorage.getItem("productsInCart");

    if(productsInCart) {
        let items = JSON.parse(productsInCart);
        let filterItems = items.filter((item) => item.id !== id);
        localStorage.setItem("productsInCart", JSON.stringify(filterItems))
        drewCartProductsUI(filterItems)
    }
}