let links = document.querySelector("#links");
let userInfo = document.querySelector("#user-info");
let userDom = document.querySelector("#user");
let logOut = document.querySelector("#logout");


let user = localStorage.getItem("username");
if(user) {
    links.remove();
    userInfo.style.display = "flex";
    userDom.innerHTML = user;
}
logOut.addEventListener("click", function(e) {
    localStorage.clear();
    setTimeout(() => {
        window.location = "registar.html"
    },1500)
})