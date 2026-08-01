const burger = document.getElementById("burger");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("menuOverlay");

burger.onclick = () => {

    navbar.classList.toggle("active");
    overlay.classList.toggle("show");

    if(navbar.classList.contains("active")){
        burger.innerHTML = "✕";
    }else{
        burger.innerHTML = "☰";
    }

};

    overlay.onclick = () => {

    navbar.classList.remove("active");
    overlay.classList.remove("show");
    burger.innerHTML = "☰";

};