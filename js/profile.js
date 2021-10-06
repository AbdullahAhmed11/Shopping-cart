//data from localstorage 
let getUser = localStorage.getItem("username");
let getEmail = localStorage.getItem("email");
let productsProfile = JSON.parse(localStorage.getItem("products")) || productsDB;
let myProducts = productsProfile.filter((i) => i.isMe === "Y");

//variables 
let userDom2 = document.getElementById("username");
let userEmailDom = document.getElementById("email");
let productLenght = document.querySelector("#productLength span");

userDom2.innerHTML = getUser;
userEmailDom.innerHTML = getEmail;
