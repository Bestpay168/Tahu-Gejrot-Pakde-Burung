

const langBtn=document.getElementById("langBtn");

const langMenu=document.querySelector(".lang-menu");

langBtn.onclick=function(){

    langMenu.classList.toggle("show");

}

const lang = {


ja:{
    navHome:"ホーム",
    navMenu:"メニュー",
    navAbout:"会社概要",
    navGallery:"ギャラリー",   
    navMaps:"所在地",
    navOrder:"注文",
    navFaq:"FAQ",
    navKon:"Kontak"




}

};