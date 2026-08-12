const langBtn=document.getElementById("langBtn");

const langMenu=document.querySelector(".lang-menu");

langBtn.onclick=function(){

    langMenu.classList.toggle("show");

}

const lang={

id:{
    navHome:"Beranda",
    navMenu:"Menu",
    navAbout:"Tentang",
    navGal:"Galeri",
    navMaps:"Lokasi",
    navOrder:"Pesan",
    navFaq:"FAQ",
    navKon:"Kontak",

    heroTitle:"TAHU GEJROT PAKDE BURUNG",
    heroDesc:"Pedas, Segar, dan Bikin Nagih",
    btnOrder:"Pesan Sekarang",
    btnMenu:"lihat Menu",
},

en:{
    navHome:"Home",
    navMenu:"Menu",
    navAbout:"About",
    navGal:"Gallery",
    navMaps:"Location",
    navOrder:"Order",
    navFaq:"FAQ",
    navKon:"Contact",
    heroTitle:"PAKDE BURUNG TOFU GEJROT",
    heroDesc:"Spicy, Fresh, and Delicious",
    btnOrder:"Order Now",
    btnMenu:"View Menu",
},

zh:{
    navHome:"首页",
    navMenu:"菜单",
    navAbout:"关于我们",
    navGal:"图库",
    navMaps:"位置",
    navOrder:"订购",
    navFaq:"常见问题",
    navKon:"联系我们",
    heroTitle:"Pakde Burung 印尼特色豆腐",
    heroDesc:"香辣、新鲜、美味",
    btnOrder:"立即订购",
    btnMenu:"查看菜单",

},

ja:{
    navHome:"ホーム",
    navMenu:"メニュー",
    navAbout:"会社概要",
    navGal:"ギャラリー",   
    navMaps:"所在地",
    navOrder:"注文",
    navFaq:"よくある質問",
    navKon:"お問い合わせ",
heroTitle:"パクデ・ブルン 豆腐ゲジョロット",
heroDesc:"辛くて新鮮、とても美味しい",
btnOrder:"今すぐ注文",
btnMenu:"メニューを見る",

},

ko:{
    navHome:"홈",
    navMenu:"메뉴",
    navAbout:"소개",
    navGal:"갤러리",
    navMaps:"위치",
    navOrder:"주문",   
    navFaq:"자주 묻는 질문",
    navKon:"문의하기",
heroTitle:"박데 부룽 타후 게조롯",
heroDesc:"매콤하고 신선하며 맛있습니다",
btnOrder:"지금 주문하기",
 btnMenu:"메뉴 보기",

},

ar:{
    navHome:"الرئيسية",
    navMenu:"القائمة",
    navAbout:"من نحن",
    navGal:"المعرض",
    navMaps:"الموقع",
    navOrder:"اطلب الآن",
    navFaq:"الأسئلة الشائعة",
    navKon:"اتصل بنا",

    heroTitle:"تاهو جيجروت باكدي بورونغ",
    heroDesc:"حار • طازج • لذيذ للغاية",
    btnOrder:"اطلب الآن",
    btnMenu:"عرض القائمة",

}

};

function setLang(language){

document.getElementById("navHome").textContent=lang[language].navHome;
document.getElementById("navMenu").textContent=lang[language].navMenu;
document.getElementById("navAbout").textContent=lang[language].navAbout;
document.getElementById("navGal").textContent=lang[language].navGallery;
document.getElementById("navMaps").textContent=lang[language].navMaps;
document.getElementById("navOrder").textContent=lang[language].navOrder;
document.getElementById("navFaq").textContent=lang[language].navFaq;
document.getElementById("navKon").textContent=lang[language].navKon;

document.getElementById("heroTitle").textContent=lang[language].heroTitle;
document.getElementById("heroDesc").textContent=lang[language].heroDesc;
document.getElementById("btnOrder").textContent=lang[language].btnOrder;
document.getElementById("btnMenu").textContent=lang[language].btnMenu;


}

