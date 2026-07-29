
/* =========================================
   TAHU GEJROT PAKDE BURUNG
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", function updateCart() {

    updateCart();
const total =
document.getElementById("cartTotal").textContent;
    const form = document.getElementById("orderForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            kirimWhatsApp();

        });

    }

});



/* ==========================================
   INFORMASI PEMBAYARAN
========================================== */

function showPaymentInfo() {

    const payment = document.getElementById("payment");
    const info = document.getElementById("payment-info");

    if (!payment || !info) return;

    switch (payment.value) {

        case "cod":

            info.innerHTML = `
                <h4>💵 Bayar di Tempat (COD)</h4>
                <p>Pembayaran dilakukan saat pesanan diterima.</p>
            `;

            break;

        case "qris":

            info.innerHTML = `
                <h4>📱 QRIS</h4>
                <img src="images/qris.png" width="220" alt="QRIS">
                <p>Silakan scan QRIS untuk melakukan pembayaran.</p>
            `;

            break;

        case "dana":

            info.innerHTML = `
                <h4>🔵 DANA</h4>
                <p>Nomor DANA</p>
                <strong>081234567890</strong>
            `;

            break;

        case "gopay":

            info.innerHTML = `
                <h4>🟢 GoPay</h4>
                <p>Nomor GoPay</p>
                <strong>081234567890</strong>
            `;

            break;

        case "ovo":

            info.innerHTML = `
                <h4>🟣 OVO</h4>
                <p>Nomor OVO</p>
                <strong>081234567890</strong>
            `;

            break;

        case "transfer":

            info.innerHTML = `
                <h4>🏦 Transfer Bank</h4>

                <p>Bank BCA</p>

                <strong>1234567890</strong>

                <p>a.n. Pakde Burung</p>
            `;

            break;

        default:

            info.innerHTML = "";

    }

}

/* ==========================================
   KIRIM KE WHATSAPP
========================================== */

function kirimWhatsApp() {

    const nama = document.getElementById("nama").value.trim();
    const wa = document.getElementById("wa").value.trim();
    const alamat = document.getElementById("alamat").value.trim();

    const pedas = document.getElementById("pedas").value;
    const catatan = document.getElementById("catatan").value;
    const pembayaran = document.getElementById("payment");

    const metode = pembayaran.options[pembayaran.selectedIndex].text;

    if (
        nama === "" ||
        wa === "" ||
        alamat === "" ||
        pembayaran.value === ""
    ) {

        alert("Silakan lengkapi semua data.");

        return;

    }

    const pesan =

`*PESANAN BARU*
========================

👤 Nama : ${nama}

📱 WhatsApp : ${wa}

📍 Alamat :
${alamat}

🍽 Menu :
${namaMenu}

🍴 Jumlah :
${jumlah} Porsi

🌶 Pedas :
${pedas}

💰 Total :
${total}

💳 Pembayaran :
${metode}

📝 Catatan :
${catatan}

Terima kasih.
TAHU GEJROT PAKDE BURUNG`;

    const nomorAdmin = "6285774537978";

    const url =

"https://wa.me/" +
nomorAdmin +
"?text=" +
encodeURIComponent(pesan);

    window.open(url, "_blank");

}

/* ==========================================
   SCROLL HALUS
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(function(link){

    link.addEventListener("click", function(e){

        const tujuan = document.querySelector(this.getAttribute("href"));

        if(tujuan){

            e.preventDefault();

            tujuan.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});