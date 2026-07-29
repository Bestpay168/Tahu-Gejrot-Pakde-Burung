/* =========================================
   TAHU GEJROT PAKDE BURUNG
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuItems =
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
   KIRIM PESAN KE WHATSAPP
========================================== */

function kirimWhatsApp() {

    const nama = document.getElementById("nama").value.trim();
    const wa = document.getElementById("wa").value.trim();
    const alamat = document.getElementById("alamat").value.trim();
    const pedas = document.getElementById("pedas").value;
    const catatan = document.getElementById("catatan").value;

    const pembayaran = document.getElementById("payment");
    const metodeBayar = pembayaran.options[pembayaran.selectedIndex].text;

    const delivery = document.getElementById("deliveryMethod");
    const metodeAmbil = delivery.options[delivery.selectedIndex].text;

    if (
        nama === "" ||
        wa === "" ||
        alamat === "" ||
        pembayaran.value === ""
    ) {

        alert("Silakan lengkapi data terlebih dahulu.");

        return;

    }

    let daftarMenu = "";
    let adaPesanan = false;

    document.querySelectorAll(".menu-item").forEach(function(item){

        const namaMenu = item.dataset.name;
        const harga = parseInt(item.dataset.price);

        const qty = parseInt(
            item.querySelector(".qty").value
        );

        if(qty>0){

            adaPesanan = true;

            const totalItem = harga*qty;

            daftarMenu +=
            "• " +
            namaMenu +
            " x" +
            qty +
            " = Rp" +
            totalItem.toLocaleString("id-ID") +
            "\n";

        }

    });

    if(!adaPesanan){

        alert("Silakan pilih menu terlebih dahulu.");

        return;

    }

    const subtotal =
    document.getElementById("subtotal").textContent;

    const ongkir =
    document.getElementById("ongkir").textContent;

    const total =
    document.getElementById("total").textContent;

    const pesan =
`*🍽️ PESANAN BARU*
==========================

👤 Nama
${nama}

📱 WhatsApp
${wa}

📍 Alamat
${alamat}

🛍️ Metode
${metodeAmbil}

🍴 Daftar Pesanan
${daftarMenu}

🌶️ Tingkat Pedas
${pedas}

💰 Subtotal
${subtotal}

🚚 Ongkir
${ongkir}

💵 Total
${total}

💳 Pembayaran
${metodeBayar}

📝 Catatan
${catatan}

Terima kasih 🙏
TAHU GEJROT PAKDE BURUNG`;

    const nomorAdmin="6285774537978";

    const url=
    "https://wa.me/"
    +nomorAdmin+
    "?text="+
    encodeURIComponent(pesan);

    window.open(url,"_blank");

}