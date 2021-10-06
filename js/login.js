let username = document.querySelector("#username");
let password = document.querySelector("#password");
let btnLogin = document.querySelector("#log");

let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");


btnLogin.addEventListener("click", function(e) {
    e.preventDefault();
    if(username.value === "" ||  password.value === "" ) {
        alert("Erorr! pleaze full data")
    }else {
        if(getUser && getUser.trim() === username.value.trim() && getPassword && getPassword === password.value) {
            window.location = "index.html"
        }else {
            console.log("something wrong")
        }
    }
})