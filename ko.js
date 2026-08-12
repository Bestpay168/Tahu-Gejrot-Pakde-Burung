

const langBtn=document.getElementById("langBtn");

const langMenu=document.querySelector(".lang-menu");

langBtn.onclick=function(){

    langMenu.classList.toggle("show");

}

const lang = {



ko:{
    navHome:"홈",
    navMenu:"메뉴",
    navAbout:"소개",
    navGallery:"갤러리",
    navMaps:"위치",
    navOrder:"주문",   
    navFaq:"FAQ",
    navKon:"Kontak",

},



}

};