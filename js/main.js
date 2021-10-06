
let productsDom = document.querySelector(".products");
let products = productsDB;
let cartsProductsMenu = document.querySelector(".carts-products");
let cartsProducts = document.querySelector(".carts-products div");
let badgeDom = document.querySelector(".badge");
let shoppingCartIcon = document.querySelector(".shoppingCart")


// define product function 
let drewProductsUI;
drewProductsUI = function (products = []) {

    let productsUI = products.map( (item) => {
        return `
        <div class="product-item">
            <img src="${item.imageUrl}" alt="" class="product-item-img">

            <div class="product-item-desc">
                <a onclick='saveItemId(${item.id})'>${item.title}</a>
                <p>${item.desc}</p>
                <span>Size: ${item.size}</span><br>
                <span>Quantity: ${item.qty}</span><br>
                <span>Price: ${item.price}</span>
            </div>
            <div class="product-item-action">
                <button class="add-to-cart" onclick="addedToCart(${item.id})">Add to cart</button>
                <i class=" fav far fa-heart"></i> 
            </div>
        </div>
        `
    })

    productsDom.innerHTML = productsUI.join("");

}
drewProductsUI(JSON.parse(localStorage.getItem("products")));



// check if there item in cart
let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart") ) : [];

    if(addedItem) {
        addedItem.map((item) => {
            cartsProducts.innerHTML += `<p>${item.title} <span class="item-qty>${item.qty}</span></p>`
        })
        badgeDom.style.display = "block";
        badgeDom.innerHTML = addedItem.length;
    }

// add to cart function
let allItems = [];
function addedToCart(id) {

    if(localStorage.getItem("username")) {
        let chossenItem = products.find((item) => item.id === id);
        let item = allItems.find((i) => i.id === chossenItem.id);

        if(item) {
            chossenItem.qty += 1;
        }else {
            allItems.push(chossenItem);
        }

        cartsProducts.innerHTML = "";
        allItems.forEach((item) => {
            cartsProducts.innerHTML += `<p>${item.title} ${item.qty}</p>`
        });

        addedItem = [...addedItem, chossenItem];
let uniqueProduucts = getUniqueArr(addedItem, "id");
        
        localStorage.setItem("productsInCart", JSON.stringify(uniqueProduucts))


        let cartProductsItem = document.querySelectorAll(".carts-products div p");
        badgeDom.style.display = "block";
        badgeDom.innerHTML = cartProductsItem.length;
        }
    else {
        window.location = "login.html"
    }
}

// finction not repeat data 
function getUniqueArr(arr, filterType) {
    let unique = arr
    .map((item) => item[filterType])
    .map((item, i, final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item])
    return unique;
}

//open  shopping cart menue 
shoppingCartIcon.addEventListener("click", openCartMenu)
function openCartMenu () {
    if(cartsProducts.innerHTML != ""){
        if(cartsProductsMenu.style.display == "block") {
            cartsProductsMenu.style.display = "none";
        }else {
            cartsProductsMenu.style.display = "block";
        }
    }
}


function saveItemId(id) {
    localStorage.setItem("id", id)
    window.location = "cartDetails.html"
}  

// search function 
let input = document.getElementById("search");
input.addEventListener("keyup", function(e) {
        search(e.target.value, JSON.parse(localStorage.getItem("products")))

    if(e.target.value.trim() === "") {
        drewProductsUI(JSON.parse(localStorage.getItem("products")))
    }
})
function search(title, myArray) {
let arr = myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
drewProductsUI(arr)
}

//filter size 
let sizeSelect = document.getElementById("size-select");

sizeSelect.addEventListener("change", getProductsSize)

function getProductsSize (e) {
    let val = e.target.value;
    let products = JSON.parse(localStorage.getItem("products")) || products;
    if(val === "all") {
        drewProductsUI(products)
    }else {
        products = products.filter((i) => i.size === val) 
        drewProductsUI(products)
    }
}