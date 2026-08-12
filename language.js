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

menuTitle:"Menu Kami",
menuDesc:"Pilih menu favorit Anda.",
menuItem1:"Tahu Gejrot Original",
menuItem2:"Tahu Gejrot Extra Pedas",
menuItem3:"Tahu Gejrot Jumbo",
menuItem4:"Tahu Gejrot Komplit",
menuPrice1:"Rp10.000",
menuPrice2:"Rp15.000",
menuPrice3:"Rp20.000",
menuPrice4:"Rp25.000",
btnOrder1:"Pesan",
btnOrder2:"Pesan",
btnOrder3:"Pesan",
btnOrder4:"Pesan", 

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

menuTitle:"Our Menu",
menuDesc:"Choose your favorite menu.",
menuItem1:"Original Tahu Gejrot",
menuItem2:"Extra Spicy Tahu Gejrot",
menuItem3:"Jumbo Tahu Gejrot",
menuItem4:"Complete Tahu Gejrot",
menuPrice1:"Rp10,000",
menuPrice2:"Rp15,000",
menuPrice3:"Rp20,000",
menuPrice4:"Rp25,000",
btnOrder1:"Order",
btnOrder2:"Order",
btnOrder3:"Order",
btnOrder4:"Order", 

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

menuTitle:"我们的菜单",
menuDesc:"选择您喜欢的菜单。",
menuItem1:"原味豆腐盖浇",
menuItem2:"特辣豆腐盖浇",
menuItem3:"超大份豆腐盖浇",
menuItem4:"豪华豆腐盖浇",
menuPrice1:"10,000 印尼盾",
menuPrice2:"15,000 印尼盾",
menuPrice3:"20,000 印尼盾",
menuPrice4:"25,000 印尼盾",
btnOrder1:"订购",
btnOrder2:"订购",
btnOrder3:"订购",
btnOrder4:"订购", 

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

menuTitle:"メニュー",
menuDesc:"お好きなメニューをお選びください。",
menuItem1:"オリジナル豆腐ゲジョロット",
menuItem2:"激辛豆腐ゲジョロット",
menuItem3:"ジャンボ豆腐ゲジョロット",
menuItem4:"全部入り豆腐ゲジョロット",
menuPrice1:"10,000ルピア",
menuPrice2:"15,000ルピア",
menuPrice3:"20,000ルピア",
menuPrice4:"25,000ルピア",
btnOrder1:"注文",
btnOrder2:"注文",
btnOrder3:"注文",
btnOrder4:"注文", 

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

menuTitle:"메뉴",
menuDesc:"원하는 메뉴를 선택하세요.",
menuItem1:"오리지널 타후 게조롯",
menuItem2:"매운 타후 게조롯",
menuItem3:"점보 타후 게조롯",
menuItem4:"스페셜 타후 게조롯",
menuPrice1:"10,000루피아",
menuPrice2:"15,000루피아",
menuPrice3:"20,000루피아",
menuPrice4:"25,000루피아",
btnOrder1:"주문",
btnOrder2:"주문",
btnOrder3:"주문",
btnOrder4:"주문", 

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

menuTitle:"قائمتنا",
    menuDesc:"اختر وجبتك المفضلة.",
    menuItem1:"تاهو جيجروت الأصلي",
    menuItem2:"تاهو جيجروت حار جدًا",
    menuItem3:"تاهو جيجروت جامبو",
    menuItem4:"تاهو جيجروت كامل",
    menuPrice1:"10,000 روبية",
    menuPrice2:"15,000 روبية",
    menuPrice3:"20,000 روبية",
    menuPrice4:"25,000 روبية",
btnOrder1:"اطلب الآن",
btnOrder2:"اطلب الآن",
btnOrder3:"اطلب الآن",
btnOrder4:"اطلب الآن", 


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


document.getElementById("menuItem1").textContent=lang[language].menuItem1;

document.getElementById("menuItem2").textContent=lang[language].menuItem2;

document.getElementById("menuItem3").textContent=lang[language].menuItem3;

document.getElementById("menuItem4").textContent=lang[language].menuItem4;

document.getElementById("menuPrice1").textContent=lang[language].menuPrice1;

document.getElementById("menuPrice2").textContent=lang[language].menuPrice2;

document.getElementById("menuPrice3").textContent=lang[language].menuPrice3;

document.getElementById("menuPrice4").textContent=lang[language].menuPrice4;

document.getElementById("btnOrder1").textContent=lang[language].btnOrder1;

document.getElementById("btnOrder2").textContent=lang[language].btnOrder2;

document.getElementById("btnOrder3").textContent=lang[language].btnOrder3;

document.getElementById("btnOrder4").textContent=lang[language].btnOrder4;
}

