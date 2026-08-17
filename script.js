
/* ==========================================
   SCRIPT.JS
   BAGIAN 5A
   TAHU GEJROT PAKDE BURUNG
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ======================================
       LOADER
    ====================================== */

    const loader = document.querySelector(".loader");

    if (loader) {
        window.addEventListener("load", function () {

            setTimeout(function () {
                loader.classList.add("hide");
            }, 600);

        });
    }

    /* ======================================
       STICKY NAVBAR
    ====================================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 80) {

            header.classList.add("active");

        } else {

            header.classList.remove("active");

        }

    });

    /* ======================================
       SMOOTH SCROLL
    ====================================== */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                window.scrollTo({

                    top: target.offsetTop - 70,

                    behavior: "smooth"

                });

            }

        });

    });

    /* ======================================
       BACK TO TOP
    ====================================== */

    const topButton = document.querySelector(".top");

    window.addEventListener("scroll", function () {

        if (!topButton) return;

        if (window.scrollY > 500) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    });

    if (topButton) {

        topButton.addEventListener("click", function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ======================================
       ACTIVE MENU
    ====================================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", function () {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ======================================
       HERO BUTTON EFFECT
    ====================================== */

    const buttons = document.querySelectorAll(
        ".btn1,.btn2,.btn-order"
    );

    buttons.forEach(button => {

        button.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-5px)";

        });

        button.addEventListener("mouseleave", function () {

            this.style.transform = "";

        });

    });

    /* ======================================
       CARD EFFECT
    ====================================== */

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.transition = ".4s";

        });

    });

});

/* ==========================================
   SCRIPT.JS
   BAGIAN 5B
   SCROLL ANIMATION + COUNTER + PARALLAX
========================================== */


/* ======================================
   SCROLL ANIMATION
====================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(

".fade-up,.fade-down,.fade-left,.fade-right,.zoom"

).forEach(el=>{

    observer.observe(el);

});


/* ======================================
   COUNTER
====================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let value=0;

const speed=target/120;

const update=()=>{

if(value<target){

value+=speed;

counter.innerText=Math.ceil(value);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/* ======================================
   PARALLAX HERO
====================================== */

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

let scroll=window.pageYOffset;

if(hero){

hero.style.backgroundPositionY=scroll*0.5+"px";

}

});


/* ======================================
   HERO MOUSE EFFECT
====================================== */

const heroContent=document.querySelector(".hero-content");

if(heroContent){

hero.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/40;

let y=(window.innerHeight/2-e.pageY)/40;

heroContent.style.transform=

`translate(${x}px,${y}px)`;

});

hero.addEventListener("mouseleave",()=>{

heroContent.style.transform="translate(0,0)";

});

}


/* ======================================
   IMAGE FADE
====================================== */

const images=document.querySelectorAll("img");

images.forEach(img=>{

img.addEventListener("load",()=>{

img.style.opacity="1";

});

});


/* ======================================
   CARD STAGGER
====================================== */

const menuCards=document.querySelectorAll(".card");

menuCards.forEach((card,index)=>{

card.style.transitionDelay=(index*0.08)+"s";

});


/* ======================================
   CTA ANIMATION
====================================== */

const cta=document.querySelector(".cta");

if(cta){

const ctaObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

cta.classList.add("show");

}

});

});

ctaObserver.observe(cta);

}


/* ======================================
   HEADER SHADOW
====================================== */

window.addEventListener("scroll",()=>{

if(window.scrollY>20){

document.querySelector(".header")

.style.boxShadow=

"0 10px 35px rgba(0,0,0,.18)";

}else{

document.querySelector(".header")

.style.boxShadow="none";

}

});


/* ======================================
   FLOATING WHATSAPP EFFECT
====================================== */

const wa=document.querySelector(".wa");

if(wa){

setInterval(()=>{

wa.classList.toggle("pulse");

},2000);

}


/* ======================================
   RANDOM CARD ANIMATION
====================================== */

setInterval(()=>{

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.style.transform="translateY(0)";

});

const random=Math.floor(

Math.random()*cards.length

);

if(cards[random]){

cards[random].style.transform=

"translateY(-10px)";

}

},3500);


/* ======================================
   END BAGIAN 5B
====================================== */

/* ==========================================
   SCRIPT.JS
   BAGIAN 5C
   HERO SLIDER
========================================== */

/* ======================================
   HERO AUTO SLIDER
====================================== */

const heroSection = document.querySelector(".hero");

const heroImages = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg"
];

let currentHero = 0;

function changeHero(index){

    if(!heroSection) return;

    heroSection.style.opacity = "0.7";

    setTimeout(()=>{

        heroSection.style.backgroundImage =
        `url('${heroImages[index]}')`;

        heroSection.style.opacity = "1";

    },300);

}

setInterval(()=>{

    currentHero++;

    if(currentHero >= heroImages.length){

        currentHero = 0;

    }

    changeHero(currentHero);

},5000);


/* ======================================
   HERO DOT INDICATOR
====================================== */

/* ======================================
   NEXT PREVIOUS
====================================== */

function nextHero(){

    currentHero++;

    if(currentHero>=heroImages.length){

        currentHero=0;

    }

    updateHero();

}

function prevHero(){

    currentHero--;

    if(currentHero<0){

        currentHero=heroImages.length-1;

    }

    updateHero();

}


/* ======================================
   SWIPE MOBILE
====================================== */

let touchStart=0;

let touchEnd=0;

heroSection.addEventListener("touchstart",(e)=>{

touchStart=e.changedTouches[0].screenX;

});

heroSection.addEventListener("touchend",(e)=>{

touchEnd=e.changedTouches[0].screenX;

if(touchStart-touchEnd>60){

nextHero();

}

if(touchEnd-touchStart>60){

prevHero();

}

});


/* ======================================
   KEYBOARD CONTROL
====================================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

nextHero();

}

if(e.key==="ArrowLeft"){

prevHero();

}

});


/* ======================================
   PAUSE WHEN TAB HIDDEN
====================================== */

document.addEventListener(

"visibilitychange",

()=>{

if(document.hidden){

console.log("Slider Pause");

}else{

console.log("Slider Active");

}

}

);

/* ==========================================
   SCRIPT.JS
   BAGIAN 5D
   GALLERY + MOBILE MENU + FINAL
========================================== */


/* ======================================
   GALLERY LIGHTBOX
====================================== */

const galleryImages =
document.querySelectorAll(".gallery-grid img");

if(galleryImages.length){

const lightbox=document.createElement("div");

lightbox.className="lightbox";

lightbox.innerHTML=`
<span class="close-lightbox">&times;</span>
<img class="lightbox-image">
`;

document.body.appendChild(lightbox);

const lightboxImg=
lightbox.querySelector(".lightbox-image");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("show");

lightboxImg.src=img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("show");

});

}



/* ======================================
   HEADER HIDE
====================================== */

let lastScroll=0;

window.addEventListener("scroll",()=>{

const current=window.pageYOffset;

if(current>lastScroll && current>150){

document.querySelector(".header")

.style.top="-90px";

}else{

document.querySelector(".header")

.style.top="0";

}

lastScroll=current;

});


/* ======================================
   RIPPLE EFFECT
====================================== */

document.querySelectorAll(

".btn1,.btn2,.btn-order"

).forEach(button=>{

button.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

ripple.className="ripple";

const rect=button.getBoundingClientRect();

ripple.style.left=
(e.clientX-rect.left)+"px";

ripple.style.top=
(e.clientY-rect.top)+"px";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/* ======================================
   RANDOM HERO TEXT
====================================== */

const slogan=[

"Pedas • Segar • Bikin Nagih",

"Resep Khas Cirebon",

"Fresh Setiap Hari",

"Bumbu Racikan Premium"

];

const heroText=document.querySelector(".hero p");

if(heroText){

setInterval(()=>{

const random=Math.floor(

Math.random()*slogan.length

);

heroText.innerHTML=slogan[random];

},5000);

}





/* ======================================
   INIT
====================================== */



/* ======================================
   LAZY IMAGE
====================================== */

document.querySelectorAll("img")

.forEach(img=>{

img.loading="lazy";

});


/* ======================================
   COPYRIGHT
====================================== */

const year=new Date().getFullYear();

const copyright=document.querySelector(".copyright");

if(copyright){

copyright.innerHTML=

`© ${year} TAHU GEJROT PAKDE BURUNG`;

}


document.addEventListener("DOMContentLoaded", function () {

    console.log("ORDER SYSTEM AKTIF");


    /* ======================================
       TOMBOL + DAN -
    ====================================== */

    document.querySelectorAll(".menu-item").forEach(function (item) {

        const plus = item.querySelector(".plus");
        const minus = item.querySelector(".minus");
        const qty = item.querySelector(".qty");

        if (!plus || !minus || !qty) {
            console.error("Elemen quantity tidak lengkap:", item);
            return;
        }


        /* TOMBOL + */

        plus.addEventListener("click", function () {

            let jumlah = parseInt(qty.value) || 0;

            qty.value = jumlah + 1;

            updateCart();

        });


        /* TOMBOL - */

        minus.addEventListener("click", function () {

            let jumlah = parseInt(qty.value) || 0;

            if (jumlah > 0) {

                qty.value = jumlah - 1;

                updateCart();

            }

        });

    });


    /* ======================================
       DELIVERY / PICKUP
    ====================================== */

    const deliveryMethod =
        document.getElementById("deliveryMethod");

    if (deliveryMethod) {

        deliveryMethod.addEventListener(
            "change",
            updateCart
        );

    }


    /* ======================================
       PAYMENT
    ====================================== */

    const payment =
        document.getElementById("payment");

    if (payment) {

        payment.addEventListener(
            "change",
            showPaymentInfo
        );

    }


    /* ======================================
       SUBMIT FORM
    ====================================== */

    const orderForm =
        document.getElementById("orderForm");

    if (orderForm) {

        orderForm.addEventListener(
            "submit",
            function (e) {

                e.preventDefault();

                kirimWhatsApp();

            }
        );

    }


    /* ======================================
       UPDATE SHOPPING CART
    ====================================== */

    updateCart();


});


/* ==========================================
   UPDATE SHOPPING CART
========================================== */

function updateCart() {

    let subtotal = 0;

    let cartHTML = "";


    document.querySelectorAll(".menu-item").forEach(function (item) {

        const nama =
            item.dataset.name;

        const harga =
            parseInt(item.dataset.price) || 0;

        const qtyElement =
            item.querySelector(".qty");

        const qty =
            parseInt(qtyElement.value) || 0;


        if (qty > 0) {

            const totalItem =
                harga * qty;

            subtotal += totalItem;


            cartHTML += `
                <div class="cart-item">

                    <span>
                        ${nama}
                    </span>

                    <strong>
                        x${qty}
                    </strong>

                    <span>
                        Rp${totalItem.toLocaleString("id-ID")}
                    </span>

                </div>
            `;

        }

    });


    /* ======================================
       JIKA CART KOSONG
    ====================================== */

    if (cartHTML === "") {

        cartHTML =
            "<p>Keranjang masih kosong.</p>";

    }


    const cart =
        document.getElementById("cart");

    if (cart) {

        cart.innerHTML = cartHTML;

    }


    /* ======================================
       ONGKIR
    ====================================== */

    let ongkir = 10000;

    const deliveryMethod =
        document.getElementById("deliveryMethod");


    if (
        deliveryMethod &&
        deliveryMethod.value === "pickup"
    ) {

        ongkir = 0;

    }


    /* ======================================
       TOTAL
    ====================================== */

    const total =
        subtotal + ongkir;


    const subtotalElement =
        document.getElementById("subtotal");

    const ongkirElement =
        document.getElementById("ongkir");

    const totalElement =
        document.getElementById("total");


    if (subtotalElement) {

        subtotalElement.textContent =
            "Rp" +
            subtotal.toLocaleString("id-ID");

    }


    if (ongkirElement) {

        ongkirElement.textContent =
            "Rp" +
            ongkir.toLocaleString("id-ID");

    }


    if (totalElement) {

        totalElement.textContent =
            "Rp" +
            total.toLocaleString("id-ID");

    }

}


/* ==========================================
   INFORMASI PEMBAYARAN
========================================== */

function showPaymentInfo() {

    const payment =
        document.getElementById("payment");

    const info =
        document.getElementById("payment-info");


    if (!payment || !info) {
        return;
    }


    switch (payment.value) {


        /* COD */

        case "cod":

            info.innerHTML = `
                <h4>💵 COD</h4>
                <p>
                    Bayar saat pesanan diterima.
                </p>
            `;

            break;


        /* QRIS */

        case "qris":

            info.innerHTML = `
                <h4>📱 QRIS</h4>

                <img
                    src="qris.png"
                    width="220"
                    alt="QRIS Tahu Gejrot Pakde Burung">
            `;

            break;


        /* DANA */

        case "dana":

            info.innerHTML = `
                <h4>🔵 DANA</h4>

                <strong>
                    089614001997
                </strong>
            `;

            break;


        /* GOPAY */

        case "gopay":

            info.innerHTML = `
                <h4>🟢 GoPay</h4>

                <strong>
                    089614001997
                </strong>
            `;

            break;


        /* OVO */

        case "ovo":

            info.innerHTML = `
                <h4>🟣 OVO</h4>

                <strong>
                    089614001997
                </strong>
            `;

            break;


        /* TRANSFER */

        case "transfer":

            info.innerHTML = `
                <h4>🏦 Transfer Bank</h4>

                <p>BCA</p>

                <strong>
                    5491006693
                </strong>

                <p>
                    a.n. Dwi Widianingtias
                </p>
            `;

            break;


        /* DEFAULT */

        default:

            info.innerHTML = "";

    }

}


/* ==========================================
   KIRIM WHATSAPP
========================================== */

function kirimWhatsApp() {


    const nama =
        document.getElementById("nama")
        .value
        .trim();


    const wa =
        document.getElementById("wa")
        .value
        .trim();


    const alamat =
        document.getElementById("alamat")
        .value
        .trim();


    const pedas =
        document.getElementById("pedas")
        .value;


    const catatan =
        document.getElementById("catatan")
        .value
        .trim();


    const deliveryElement =
        document.getElementById("deliveryMethod");


    const paymentElement =
        document.getElementById("payment");


    /* ======================================
       METODE PENGIRIMAN
    ====================================== */

    const metodePengiriman =
        deliveryElement
            .options[
                deliveryElement.selectedIndex
            ]
            .text;


    /* ======================================
       METODE PEMBAYARAN
    ====================================== */

    const metodePembayaran =
        paymentElement
            .options[
                paymentElement.selectedIndex
            ]
            .text;


    /* ======================================
       VALIDASI DATA
    ====================================== */

    if (
        nama === "" ||
        wa === "" ||
        alamat === "" ||
        paymentElement.value === ""
    ) {

        alert(
            "Silakan lengkapi data pemesanan."
        );

        return;

    }


    /* ======================================
       DAFTAR MENU
    ====================================== */

    let daftarMenu = "";

    let adaPesanan = false;


    document.querySelectorAll(".menu-item")
        .forEach(function (item) {


            const qty =
                parseInt(
                    item.querySelector(".qty").value
                ) || 0;


            if (qty > 0) {

                adaPesanan = true;


                const harga =
                    parseInt(
                        item.dataset.price
                    ) || 0;


                daftarMenu +=
                    "• " +
                    item.dataset.name +
                    " x" +
                    qty +
                    " = Rp" +
                    (harga * qty)
                        .toLocaleString("id-ID") +
                    "\n";

            }

        });


    /* ======================================
       VALIDASI MENU
    ====================================== */

    if (!adaPesanan) {

        alert(
            "Silakan pilih menu terlebih dahulu."
        );

        return;

    }


    /* ======================================
       TOTAL
    ====================================== */

    const subtotal =
        document.getElementById("subtotal")
        .textContent;


    const ongkir =
        document.getElementById("ongkir")
        .textContent;


    const total =
        document.getElementById("total")
        .textContent;


    /* ======================================
       PESAN WHATSAPP
    ====================================== */

    const pesan =

`*PESANAN BARU*

Nama:
${nama}

WhatsApp:
${wa}

Alamat:
${alamat}

Pesanan:
${daftarMenu}
Pengiriman:
${metodePengiriman}

Tingkat Kepedasan:
${pedas}

Subtotal:
${subtotal}

Ongkir:
${ongkir}

*TOTAL:
${total}*

Pembayaran:
${metodePembayaran}

Catatan:
${catatan || "-"}

Terima kasih 🙏

*TAHU GEJROT PAKDE BURUNG*`;


    /* ======================================
       NOMOR WHATSAPP ADMIN
    ====================================== */

    const nomorAdmin =
        "6285774537978";


    /* ======================================
       BUKA WHATSAPP
    ====================================== */

    const url =
        "https://wa.me/" +
        nomorAdmin +
        "?text=" +
        encodeURIComponent(pesan);


    window.open(
        url,
        "_blank"
    );

}

