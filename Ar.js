

const langBtn=document.getElementById("langBtn");

const langMenu=document.querySelector(".lang-menu");

langBtn.onclick=function(){

    langMenu.classList.toggle("show");

}

const lang = {



ar:{
    navHome:"الرئيسية",
    navMenu:"القائمة",
    navAbout:"من نحن",
    navGallery:"المعرض",
    navMaps:"الموقع",
    navOrder:"اطلب الآن",
    navFaq:"FAQ",
    navKon:"Kontak",

},

}

};