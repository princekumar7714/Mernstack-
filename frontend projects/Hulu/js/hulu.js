const logBtn = document.getElementById('log-in');
const fromBody = document.getElementById('form-body');
const closeBtn = document.getElementById('close-btn');

const openMenu = ()=>{
    console.log("clicked login btn");
    fromBody.style.display = "Block";
}
const closeMenu = () =>{
    console.log("clicked close btn");
    fromBody.style.display = "none";
}

logBtn.addEventListener("click",openMenu);
closeBtn.addEventListener("click", closeMenu);

