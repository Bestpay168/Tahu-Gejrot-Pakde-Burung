const langBtn=document.getElementById("langBtn");

const langMenu=document.querySelector(".lang-menu");

langBtn.onclick=function(){

    langMenu.classList.toggle("show");

}

const lang = {

id:{
    navHome:"Beranda",
    navMenu:"Menu",
    navAbout:"Tentang",
    navGal:"Galeri",
    navMaps:"Lokasi",
    navOrder:"Pesan",
    navFaq:"FAQ",
    navKon:"Kontak",


function setLang(language){

document.getElementById("navHome").textContent=lang[language].navHome;
document.getElementById("navMenu").textContent=lang[language].navMenu;
document.getElementById("navAbout").textContent=lang[language].navAbout;
document.getElementById("navGal").textContent=lang[language].navGallery;
document.getElementById("navMaps").textContent=lang[language].navMaps;
document.getElementById("navOrder").textContent=lang[language].navOrder;
document.getElementById("navFaq").textContent=lang[language].navFaq;
document.getElementById("navKon").textContent=lang[language].navKon;

}



