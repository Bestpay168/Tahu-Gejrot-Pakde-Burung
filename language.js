

document.addEventListener("DOMContentLoaded", function () {

    const langBtn = document.getElementById("langBtn");
    const langMenu = document.querySelector(".lang-menu");

    /* BUKA / TUTUP MENU */

    if (langBtn && langMenu) {

        langBtn.addEventListener("click", function (e) {

            e.stopPropagation();

            langMenu.classList.toggle("show");

        });

    }


    /* PILIH BAHASA */

    document.querySelectorAll(".lang-menu [data-lang]")
    .forEach(function (button) {

        button.addEventListener("click", function () {

            const language = this.dataset.lang;

            console.log("Bahasa dipilih:", language);

            setLang(language);

        });

    });


    /* TUTUP MENU */

    document.addEventListener("click", function (e) {

        if (
            langMenu &&
            langBtn &&
            !langMenu.contains(e.target) &&
            !langBtn.contains(e.target)
        ) {

            langMenu.classList.remove("show");

        }

    });

});

const langInfo = {

    id: {
        code: "ID",
        flag: "🇮🇩"
    },

    en: {
        code: "EN",
        flag: "🇺🇸"
    },

    zh: {
        code: "ZH",
        flag: "🇨🇳"
    },

    ja: {
        code: "JA",
        flag: "🇯🇵"
    },

    ko: {
        code: "KO",
        flag: "🇰🇷"
    },

    ar: {
        code: "AR",
        flag: "🇸🇦"
    }

};


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
menuPrice1:"Rp12.000",
menuPrice2:"Rp15.000",
menuPrice3:"Rp20.000",
menuPrice4:"Rp25.000",
btnOrder1:"Pesan",
btnOrder2:"Pesan",
btnOrder3:"Pesan",
btnOrder4:"Pesan", 

aboutTitle:"Tentang Kami",
aboutDesc:"TAHU GEJROT PAKDE BURUNG menghadirkan cita rasa khas Cirebon dengan kuah segar, pedas, manis, dan gurih. Menggunakan bahan berkualitas dan diracik setiap hari agar menghasilkan rasa yang konsisten.",

feature1:"✔ Higienis",
    feature2:"✔ Bumbu Khas",
    feature3:"✔ Harga Bersahabat",
    feature4:"✔ Pelayanan Cepat",

galTitle:"GALERI",
ctaTitle:"Siap Menikmati Tahu Gejrot Hari Ini?",
ctaDesc:"Klik tombol di bawah dan pesan sekarang juga",
waButton:"Pesan via WhatsApp",

faqTitle:"FAQ",
faqSub:"Pertanyaan yang Sering Diajukan",
faqDesc:"Temukan jawaban atas pertanyaan yang paling sering ditanyakan oleh pelanggan kami.",
faq1:"Apakah Tahu Gejrot Pakde Burung halal?",
faq2:"Berapa harga satu porsi?",
faq3:"Apakah bisa pesan dalam jumlah banyak?",
faq4:"Apakah tersedia layanan antar?",
faq5:"Jam operasionalnya kapan?",
suma1:"Ya. Kami menggunakan bahan-bahan yang halal dan diproses dengan menjaga kebersihan.",
suma2:"Harga mulai dari Rp12.000 per porsi. Silakan lihat menu untuk informasi lengkap.",
suma3:"Bisa. Kami melayani pesanan untuk acara, kantor, sekolah, arisan, maupun lainnya.",
suma4:"Ya. Anda dapat memesan melalui WhatsApp atau layanan pengantaran yang tersedia.",
suma5:"Senin–Minggu pukul 13.00–23.00 WIB.",

    orderTitle:"Form Pemesanan",
    orderDesc:"Silakan isi data di bawah ini.",
    nameLabel:"Nama",
    phoneLabel:"Nomor WhatsApp",
    addressLabel:"Alamat",
    menuLabel:"Pilih Menu",
    spicyLabel:"Level Pedas",
    noteLabel:"Catatan",
    deliveryLabel:"Metode Pengiriman",
    pickupLabel:"Ambil di Tempat",      paymentLabel:"Metode Pembayaran",


mapsTitle:"Lokasi",
mapsSub:"Temukan Kami",
mapsDesc:"Kunjungi TAHU GEJROT PAKDE BURUNG atau pesan melalui WhatsApp.",

cartTitle:"🛒 Keranjang Belanja",
cartEmpty:"Keranjang masih kosong.",
cartSubtotal:"Subtotal",
shipping:"Ongkir",
cartTotal:"Total",

pickupMethodLabel:"Metode Pengambilan",

paymentOption:"-- Pilih Metode Pembayaran --",

orderButton:"📲 Pesan via WhatsApp",

spicyNone:"Tidak Pedas",
spicyMedium:"Sedang",
spicyHot:"Pedas",
spicyExtra:"Extra Pedas",

esTehManis:"Es Teh Manis",

tahuOriginal:"Tahu Gejrot Original",
tahuExtraPedas:"Tahu Gejrot Extra Pedas",
footerTitle:"TAHU GEJROT PAKDE BURUNG",
footerDesc:"Pedas, Segar, dan Bikin Nagih",
nomor:"Kontak",
live:"Alamat",
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
menuPrice1:"Rp12,000",
menuPrice2:"Rp15,000",
menuPrice3:"Rp20,000",
menuPrice4:"Rp25,000",
btnOrder1:"Order",
btnOrder2:"Order",
btnOrder3:"Order",
btnOrder4:"Order", 

aboutTitle:"About Us",
aboutDesc:"PAKDE BURUNG TAHU GEJROT brings the authentic taste of Cirebon with a fresh, spicy, sweet, and savory sauce. Made from high-quality ingredients and prepared fresh every day to ensure consistent flavor.",
feature1:"✔ Hygienic",
    feature2:"✔ Signature Seasoning",
    feature3:"✔ Affordable Price",
    feature4:"✔ Fast Service",

galTitle:"GALLERY",
ctaTitle:"Ready to Enjoy Tahu Gejrot Today?",
ctaDesc:"Click the button below and order now",
waButton:"Order via WhatsApp",
faqTitle:"FAQ",
faqSub:"Frequently Asked Questions",
faqDesc:"Find answers to the questions our customers ask most often.",
faq1:"Is Tahu Gejrot Pakde Burung halal?",
faq2:"How much is one serving?",
faq3:"Can I place a large order?",
faq4:"Do you offer delivery service?",
faq5:"What are your opening hours?",
suma1:"Yes. We use halal ingredients and prepare them with strict hygiene standards.",
suma2:"Prices start from Rp12,000 per serving. Please check our menu for complete information.",
suma3:"Yes. We accept bulk orders for events, offices, schools, gatherings, and more.",
suma4:"Yes. You can order via WhatsApp or available delivery services.",
suma5:"Monday–Sunday, 1:00 PM – 11:00 PM.",

orderTitle:"Order Form",
    orderDesc:"Please fill in the form below.",

    nameLabel:"Name",
    phoneLabel:"WhatsApp Number",
    addressLabel:"Address",
    menuLabel:"Select Menu",
    spicyLabel:"Spicy Level",
    noteLabel:"Notes",
    deliveryLabel:"Delivery Method",
    pickupLabel:"Pickup",
paymentLabel:"Payment Method",

mapsTitle:"Location",
mapsSub:"Find Us",
mapsDesc:"Visit PAKDE BURUNG TAHU GEJROT or order via WhatsApp.",

cartTitle:"🛒 Shopping Cart",
cartEmpty:"Your cart is empty.",
cartSubtotal:"Subtotal",
shipping:"Shipping",
cartTotal:"Total",


 pickupMethodLabel:"Pickup Method",

  paymentOption:"-- Select Payment Method --",

orderButton:"📲 Order via WhatsApp",

spicyNone:"Not Spicy",
spicyMedium:"Medium",
spicyHot:"Spicy",
spicyExtra:"Extra Spicy",


esTehManis:"Sweet Iced Tea",

tahuOriginal:"Original Tahu Gejrot",
tahuExtraPedas:"Extra Spicy Tahu Gejrot",
footerTitle:"PAKDE BURUNG TOFU GEJROT",
footerDesc:"Spicy, Fresh, and Delicious",

nomor:"Contact",
live:"Address",
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
menuDesc:"选择您喜欢的菜单",
menuItem1:"原味豆腐盖浇",
menuItem2:"特辣豆腐盖浇",
menuItem3:"超大份豆腐盖浇",
menuItem4:"豪华豆腐盖浇",
menuPrice1:"12,000 印尼盾",
menuPrice2:"15,000 印尼盾",
menuPrice3:"20,000 印尼盾",
menuPrice4:"25,000 印尼盾",
btnOrder1:"订购",
btnOrder2:"订购",
btnOrder3:"订购",
btnOrder4:"订购", 

aboutTitle:"关于我们",
aboutDesc:"Pakde Burung 印尼豆腐采用井里汶（Cirebon）传统风味，搭配清爽、香辣、甜美、鲜香的特色酱汁。每天选用优质食材新鲜制作，确保始终保持稳定的美味。",
feature1:"✔ 卫生安全",
    feature2:"✔ 特色调味",
    feature3:"✔ 价格实惠",
    feature4:"✔ 服务快捷",

galTitle:"图库",
ctaTitle:"准备好今天品尝印尼豆腐了吗？",
ctaDesc:"点击下方按钮，立即下单。",
waButton:"通过 WhatsApp 下单",

faqTitle:"常见问题",
faqSub:"常见问题解答",
faqDesc:"查看顾客最常提出的问题及答案。",
faq1:"Pakde Burung 印尼特色豆腐是清真食品吗？",
faq2:"一份多少钱？",
faq3:"可以大量订购吗？",
faq4:"提供送餐服务吗？",
faq5:"营业时间是什么时候？",
suma1:"是的。我们使用清真食材，并严格保持食品卫生。",
suma2:"价格从每份 Rp12.000 起，请查看菜单了解更多信息。",
suma3:"可以。我们接受活动、公司、学校、聚会等团体订单。",
suma4:"提供。您可以通过 WhatsApp 或配送服务下单。",
suma5:"周一至周日 13:00–23:00。",

orderTitle:"订单表单",
    orderDesc:"请填写以下信息。",

    nameLabel:"姓名",
    phoneLabel:"WhatsApp号码",
    addressLabel:"地址",
    menuLabel:"选择菜单",
    spicyLabel:"辣度",
    noteLabel:"备注",
    deliveryLabel:"配送方式",
    pickupLabel:"到店自取",

    paymentLabel:"付款方式",

mapsTitle:"位置",
mapsSub:"找到我们",
mapsDesc:"欢迎到 Pakde Burung 印尼特色豆腐，或通过 WhatsApp 下单。",

cartTitle:"🛒 购物车",
cartEmpty:"购物车还是空的",
cartSubtotal:"小计",
shipping:"配送费",
cartTotal:"总计",

pickupMethodLabel:"取货方式",

paymentOption:"-- 请选择付款方式 --",

orderButton:"📲 通过 WhatsApp 下单",
spicyNone:"不辣",
spicyMedium:"中辣",
spicyHot:"辣",
spicyExtra:"特辣",

esTehManis:"甜冰茶",

tahuOriginal:"原味豆腐",
tahuExtraPedas:"特辣豆腐",
footerTitle:"Pakde Burung 印尼特色豆腐",
footerDesc:"香辣、新鲜、美味",

nomor:"联系方式",
live:"地址",
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
menuDesc:"お好きなメニューをお選びください",
menuItem1:"オリジナル豆腐ゲジョロット",
menuItem2:"激辛豆腐ゲジョロット",
menuItem3:"ジャンボ豆腐ゲジョロット",
menuItem4:"全部入り豆腐ゲジョロット",
menuPrice1:"12,000ルピア",
menuPrice2:"15,000ルピア",
menuPrice3:"20,000ルピア",
menuPrice4:"25,000ルピア",
btnOrder1:"注文",
btnOrder2:"注文",
btnOrder3:"注文",
btnOrder4:"注文", 

aboutTitle:"私たちについて",
aboutDesc:"PAKDE BURUNG の豆腐ゲジョロットは、チルボン地方の伝統的な味を再現しています。さっぱりとして、辛さ・甘さ・旨味の調和が取れた特製ソースを使用し、毎日厳選した食材で調理することで、いつでも変わらない美味しさをお届けします。",
feature1:"✔ 衛生的",
    feature2:"✔ 特製の味付け",
    feature3:"✔ お手頃価格",
    feature4:"✔ 素早いサービス",

galTitle:"ギャラリー",
ctaTitle:"今日は豆腐ゲジョロットを楽しみませんか",
ctaDesc:"下のボタンをクリックして、今すぐご注文ください",
waButton:"WhatsAppで注文",

faqTitle:"よくある質問",
faqSub:"よくあるご質問",
faqDesc:"お客様からよくいただく質問と回答をご覧ください。",
faq1:"パクデ・ブルンのタフ・ゲジョロットはハラールですか？",
faq2:"1人前の価格はいくらですか？",
faq3:"大量注文はできますか？",
faq4:"配達サービスはありますか？",
faq5:"営業時間を教えてください。",
suma1:"はい。ハラール食材を使用し、衛生管理を徹底しています。",
suma2:"1人前 Rp12,000からです。詳しくはメニューをご覧ください。",
suma3:"はい。イベント、会社、学校、集まりなどのご注文を承ります。",
suma4:"はい。WhatsAppまたは利用可能な配達サービスからご注文いただけます。",
suma5:"毎日 13:00～23:00です。",

orderTitle:"注文フォーム",
    orderDesc:"以下の情報をご入力ください。",

    nameLabel:"お名前",
    phoneLabel:"WhatsApp番号",
    addressLabel:"住所",
    menuLabel:"メニューを選択",
    spicyLabel:"辛さレベル",
    noteLabel:"備考",
    deliveryLabel:"受け取り方法",
     pickupLabel:"店頭受取",
    
      paymentLabel:"支払い方法",

mapsTitle:"所在地",
mapsSub:"店舗はこちら",
mapsDesc:"PAKDE BURUNG 豆腐ゲジョロットへお越しいただくか、WhatsAppからご注文ください。",

cartTitle:"🛒 ショッピングカート",
cartEmpty:"カートは空です。",
cartSubtotal:"小計",
shipping:"配送料",
cartTotal:"合計",


pickupMethodLabel:"受け取り方法",

  paymentOption:"-- お支払い方法を選択してください --",

orderButton:"📲 WhatsAppで注文",

spicyNone:"辛くない",
spicyMedium:"中辛",
spicyHot:"辛い",
spicyExtra:"激辛",


esTehManis:"甘いアイスティー",

tahuOriginal:"オリジナル・タフゲジョット",
tahuExtraPedas:"激辛タフゲジョット",
footerTitle:"パクデ・ブルン 豆腐ゲジョロット",
footerDesc:"辛くて新鮮、とても美味しい",
nomor:"お問い合わせ",
live:"住所",

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
menuPrice1:"12,000루피아",
menuPrice2:"15,000루피아",
menuPrice3:"20,000루피아",
menuPrice4:"25,000루피아",
btnOrder1:"주문",
btnOrder2:"주문",
btnOrder3:"주문",
btnOrder4:"주문", 

aboutTitle:"회사 소개",
aboutDesc:"PAKDE BURUNG 타후 게조롯은 인도네시아 치르본(Cirebon) 지역의 전통적인 맛을 담았습니다. 신선하고 매콤하며 달콤하고 감칠맛 나는 특제 소스를 사용하고, 매일 엄선한 재료로 조리하여 언제나 변함없는 맛을 제공합니다.",
feature1:"✔ 위생적",
    feature2:"✔ 특제 양념",
    feature3:"✔ 합리적인 가격",
    feature4:"✔ 빠른 서비스",

galTitle:"갤러리",
ctaTitle:"오늘 타후 게조롯을 맛볼 준비가 되셨나요?",
ctaDesc:"아래 버튼을 눌러 지금 바로 주문하세요.",
waButton:"WhatsApp으로 주문",
faqTitle:"자주 묻는 질문",
faqSub:"고객이 자주 묻는 질문",
faqDesc:"고객님들이 가장 자주 묻는 질문과 답변을 확인해 보세요.",
faq1:"박데 부룽 타후 게조롯은 할랄 음식인가요?",
faq2:"1인분 가격은 얼마인가요?",
faq3:"대량 주문이 가능한가요?",
faq4:"배달 서비스를 제공하나요?",
faq5:"영업시간은 언제인가요?",
suma1:"네. 할랄 재료를 사용하며 위생적으로 조리합니다.",
suma2:"1인분 가격은 Rp12,000부터입니다. 자세한 내용은 메뉴를 확인하세요.",
suma3:"네. 행사, 회사, 학교, 모임 등 단체 주문을 받습니다.",
suma4:"네. WhatsApp 또는 이용 가능한 배달 서비스를 통해 주문하실 수 있습니다.",
suma5:"매일 오후 1시부터 오후 11시까지 운영합니다.",

orderTitle:"주문 양식",
    orderDesc:"아래 정보를 입력해 주세요.",

    nameLabel:"이름",
    phoneLabel:"WhatsApp 번호",
    addressLabel:"주소",
    menuLabel:"메뉴 선택",
    spicyLabel:"매운맛 단계",
    noteLabel:"메모",
    deliveryLabel:"배송 방법",
    pickupLabel:"매장 수령",

    paymentLabel:"결제 방법",

mapsTitle:"위치",
mapsSub:"오시는 길",
mapsDesc:"박데 부룽 타후 게조롯을 방문하시거나 WhatsApp으로 주문하세요.",


cartTitle:"🛒 장바구니",
cartEmpty:"장바구니가 비어 있습니다.",
cartSubtotal:"소계",
shipping:"배송비",
cartTotal:"합계",

 pickupMethodLabel:"수령 방법",


paymentOption:"-- 결제 방법을 선택하세요 --",

orderButton:"📲 WhatsApp으로 주문",

spicyNone:"맵지 않음",
spicyMedium:"보통 매운맛",
spicyHot:"매운맛",
spicyExtra:"아주 매운맛",

esTehManis:"달콤한 아이스티",

tahuOriginal:"오리지널 타후 게조트",
tahuExtraPedas:"아주 매운 타후 게조트",
footerTitle:"박데 부룽 타후 게조롯",
footerDesc:"매콤하고 신선하며 맛있습니다",
nomor:"연락처",
live:"주소",

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
    menuPrice1:"12,000 روبية",
    menuPrice2:"15,000 روبية",
    menuPrice3:"20,000 روبية",
    menuPrice4:"25,000 روبية",
btnOrder1:"اطلب الآن",
btnOrder2:"اطلب الآن",
btnOrder3:"اطلب الآن",
btnOrder4:"اطلب الآن", 

aboutTitle:"من نحن",
    aboutDesc:"يقدم تاهو جيجروت باكدي بورونغ النكهة الأصلية لمدينة شيريبون بصلصة طازجة وحارة وحلوة ولذيذة، باستخدام مكونات عالية الجودة يتم تحضيرها يوميًا لضمان طعم ثابت.",

    feature1:"✔ صحي ونظيف",
    feature2:"✔ توابل أصلية",
    feature3:"✔ أسعار مناسبة",
    feature4:"✔ خدمة سريعة",

galTitle:"معرض الصور",
 ctaTitle:"هل أنت مستعد للاستمتاع بتاهو جيجروت اليوم؟",
 ctaDesc:"اضغط على الزر أدناه واطلب الآن",
waButton:"اطلب عبر واتساب",

faqTitle:"الأسئلة الشائعة",
    faqSub:"الأسئلة الأكثر شيوعًا",
    faqDesc:"اعثر على إجابات لأكثر الأسئلة التي يطرحها عملاؤنا.",

    faq1:"هل تاهو جيجروت باكدي بورونغ حلال؟",
    faq2:"كم سعر الحصة الواحدة؟",
    faq3:"هل يمكن طلب كميات كبيرة؟",
    faq4:"هل تتوفر خدمة التوصيل؟",
    faq5:"ما هي ساعات العمل؟",

    suma1:"نعم، نستخدم مكونات حلال ونلتزم بأعلى معايير النظافة.",
    suma2:"تبدأ الأسعار من 12,000 روبية للحصة. يرجى الاطلاع على القائمة لمزيد من التفاصيل.",
    suma3:"نعم، نوفر طلبات المناسبات والمكاتب والمدارس والتجمعات وغيرها.",
    suma4:"نعم، يمكنك الطلب عبر واتساب أو من خلال خدمات التوصيل المتاحة.",
    suma5:"يوميًا من الساعة 13:00 إلى 23:00.",

orderTitle:"نموذج الطلب",
    orderDesc:"يرجى تعبئة البيانات التالية.",

    nameLabel:"الاسم",
    phoneLabel:"رقم واتساب",
    addressLabel:"العنوان",
    menuLabel:"اختر القائمة",
    spicyLabel:"درجة الحارة",
    noteLabel:"ملاحظات",
    deliveryLabel:"طريقة التوصيل",
    pickupLabel:"الاستلام من المتجر",
    paymentLabel:"طريقة الدفع",


mapsTitle:"الموقع",
mapsSub:"اعثر علينا",
mapsDesc:"قم بزيارة تاهو جيجروت باكدي بورونغ أو اطلب عبر واتساب.",

cartTitle:"🛒 سلة التسوق",
cartEmpty:"سلة التسوق فارغة.",
cartSubtotal:"المجموع الفرعي",
shipping:"رسوم التوصيل",
cartTotal:"الإجمالي",


pickupMethodLabel:"طريقة الاستلام",

paymentOption:"-- اختر طريقة الدفع --",


orderButton:"📲 اطلب عبر واتساب",

spicyNone:"غير حار",
spicyMedium:"متوسط",
spicyHot:"حار",
spicyExtra:"حار جدًا",

esTehManis:"شاي مثلج حلو",

tahuOriginal:"تاهو غيجروت الأصلي",
tahuExtraPedas:"تاهو غيجروت حار جدًا",
footerTitle:"تاهو جيجروت باكدي بورونغ",
footerDesc:"حار • طازج • لذيذ للغاية",

nomor:"اتصل بنا",
Live:"العنوان",
}

};

function setLang(language){

document.getElementById("navHome").textContent=lang[language].navHome;
document.getElementById("navMenu").textContent=lang[language].navMenu;
document.getElementById("navAbout").textContent=lang[language].navAbout;
document.getElementById("navGal").textContent=lang[language].navGal;
document.getElementById("navMaps").textContent=lang[language].navMaps;
document.getElementById("navOrder").textContent=lang[language].navOrder;
document.getElementById("navFaq").textContent=lang[language].navFaq;
document.getElementById("navKon").textContent=lang[language].navKon;

document.getElementById("heroTitle").textContent=lang[language].heroTitle;
document.getElementById("heroDesc").textContent=lang[language].heroDesc;
document.getElementById("btnOrder").textContent=lang[language].btnOrder;
document.getElementById("btnMenu").textContent=lang[language].btnMenu;

document.getElementById("menuTitle").textContent=lang[language].menuTitle;

document.getElementById("menuDesc").textContent=lang[language].menuDesc;

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

document.getElementById("aboutTitle").textContent=lang[language].aboutTitle;

document.getElementById("aboutDesc").textContent=lang[language].aboutDesc;

document.getElementById("feature1").textContent = lang[language].feature1;

document.getElementById("feature2").textContent = lang[language].feature2;

document.getElementById("feature3").textContent = lang[language].feature3;

document.getElementById("feature4").textContent = lang[language].feature4;

document.getElementById("galTitle").textContent=lang[language].galTitle;

document.getElementById("ctaTitle").textContent=lang[language].ctaTitle;

document.getElementById("ctaDesc").textContent=lang[language].ctaDesc;

document.getElementById("waButton").textContent=lang[language].waButton;

document.getElementById("faqTitle").textContent=lang[language].faqTitle;
document.getElementById("faqSub").textContent=lang[language].faqSub;
document.getElementById("faqDesc").textContent=lang[language].faqDesc;
document.getElementById("faq1").textContent=lang[language].faq1;
document.getElementById("faq2").textContent=lang[language].faq2;
document.getElementById("faq3").textContent=lang[language].faq3;
document.getElementById("faq4").textContent=lang[language].faq4;
document.getElementById("faq5").textContent=lang[language].faq5;
document.getElementById("suma1").textContent=lang[language].suma1;
document.getElementById("suma2").textContent=lang[language].suma2;
document.getElementById("suma3").textContent=lang[language].suma3;
document.getElementById("suma4").textContent=lang[language].suma4;
document.getElementById("suma5").textContent=lang[language].suma5;

document.getElementById("orderTitle").textContent = lang[language].orderTitle;
document.getElementById("orderDesc").textContent = lang[language].orderDesc;
document.getElementById("nameLabel").textContent = lang[language].nameLabel;
document.getElementById("phoneLabel").textContent = lang[language].phoneLabel;
document.getElementById("addressLabel").textContent = lang[language].addressLabel;
document.getElementById("menuLabel").textContent = lang[language].menuLabel;
document.getElementById("spicyLabel").textContent = lang[language].spicyLabel;
document.getElementById("noteLabel").textContent = lang[language].noteLabel;
document.getElementById("deliveryLabel").textContent = lang[language].deliveryLabel;
document.getElementById("pickupLabel").textContent = lang[language].pickupLabel;
document.getElementById("paymentLabel").textContent = lang[language].paymentLabel;


document.getElementById("mapsTitle").textContent = lang[language].mapsTitle;
document.getElementById("mapsSub").textContent = lang[language].mapsSub;
document.getElementById("mapsDesc").textContent = lang[language].mapsDesc;

document.getElementById("cartTitle").textContent = lang[language].cartTitle;

document.getElementById("cartSubtotal").textContent = lang[language].cartSubtotal;
document.getElementById("shipping").textContent = lang[language].shipping;
document.getElementById("cartTotal").textContent = lang[language].cartTotal;

document.getElementById("pickupMethodLabel").textContent =lang[language].pickupMethodLabel;

document.getElementById("paymentOption").textContent =lang[language].paymentOption;


document.getElementById("orderButton").textContent =lang[language].orderButton;

document.getElementById("spicyNone").textContent = lang[language].spicyNone;

document.getElementById("spicyMedium").textContent =lang[language].spicyMedium;

document.getElementById("spicyHot").textContent =lang[language].spicyHot;


document.getElementById("spicyExtra").textContent =lang[language].spicyExtra;
document.getElementById("esTehManis").textContent =lang[language].esTehManis;

document.getElementById("tahuOriginal").textContent =lang[language].tahuOriginal;
document.getElementById("tahuExtraPedas").textContent =lang[language].tahuExtraPedas;

document.getElementById("footerTitle").textContent =lang[language].footerTitle;
document.getElementById("footerDesc").textContent =lang[language].footerDesc;

document.getElementById("nomor").textContent =lang[language].nomor;
document.getElementById("Live").textContent =lang[language].Live;


const cartEmpty =
document.getElementById("cartEmpty");

if (cartEmpty) {
    cartEmpty.textContent = lang[language].cartEmpty;

}

const currentLang = document.getElementById("currentLang");

if (currentLang && langInfo[language]) {
    currentLang.textContent = langInfo[language].code;
}
const currenyFlag = document.getElementById("currentFlag");

if (currentFlag && langInfo[language]) {
    currentLang.textContent = langInfo[language].flag;

}
}