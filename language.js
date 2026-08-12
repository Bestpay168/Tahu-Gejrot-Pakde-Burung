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

en:{
    navHome:"Home",
    navMenu:"Menu",
    navAbout:"About",
    navGal:"Gallery",
    navMaps:"Location",
    navOrder:"Order",
    navFaq:"FAQ",
    navKon:"Kontak",

zh:{
    navHome:"首页",
    navMenu:"菜单",
    navAbout:"关于我们",
    navGallery:"图库",
    navMaps:"位置",
    navOrder:"订购",
    navFaq:"FAQ",
    navKon:"Kontak",

ja:{
    navHome:"ホーム",
    navMenu:"メニュー",
    navAbout:"会社概要",
    navGallery:"ギャラリー",   
    navMaps:"所在地",
    navOrder:"注文",
    navFaq:"FAQ",
    navKon:"Kontak",

ko:{
    navHome:"홈",
    navMenu:"메뉴",
    navAbout:"소개",
    navGallery:"갤러리",
    navMaps:"위치",
    navOrder:"주문",   
    navFaq:"FAQ",
    navKon:"Kontak",

ar:{
    navHome:"الرئيسية",
    navMenu:"القائمة",
    navAbout:"من نحن",
    navGallery:"المعرض",
    navMaps:"الموقع",
    navOrder:"اطلب الآن",
    navFaq:"FAQ",
    navKon:"Kontak",

}

);

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

