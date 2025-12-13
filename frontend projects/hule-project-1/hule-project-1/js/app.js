// console.log("Hello World!");

const logBtn = document.getElementById("log-in");
const formBody = document.getElementById("form-body");
const closeBtn = document.getElementById("close-btn");

const openMenu = () => {
    console.log("Clicked Open Menu");
    formBody.style.display = "block";
    
}

const closeMenu = () => {
    console.log("Clicked Close Menu");
    formBody.style.display = "none";
}

logBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);