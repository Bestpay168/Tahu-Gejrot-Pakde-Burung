console.log("Website Tahu Gejrot Pakde Burung");
/* ======================================
   HITUNG TOTAL
====================================== */

function hitungTotal() {

    let harga = parseInt(document.getElementById("menu").value) || 0;
    let jumlah = parseInt(document.getElementById("jumlah").value) || 1;

    let total = harga * jumlah;

    document.getElementById("total").value =
        "Rp " + total.toLocaleString("id-ID");

}


/* ======================================
   INFORMASI PEMBAYARAN
====================================== */

function showPaymentInfo() {

    const metode = document.getElementById("payment").value;
    const info = document.getElementById("payment-info");

    switch (metode) {

        case "cod":
            info.innerHTML = `
                <h4>💵 Tunai (COD)</h4>
                <p>Pembayaran dilakukan saat pesanan diterima.</p>
            `;
            break;

        case "qris":
            info.innerHTML = `
                <h4>📱 QRIS</h4>
                <p>Silakan scan QRIS berikut.</p>
                <img src="qris.png" alt="QRIS" width="220">
            `;
            break;

        case "dana":
            info.innerHTML = `
                <h4>💙 DANA</h4>
                <p>Nomor DANA:</p>
                <strong>085774537978</strong>
            `;
            break;

        case "gopay":
            info.innerHTML = `
                <h4>🟢 GoPay</h4>
                <p>Nomor GoPay:</p>
                <strong>089614001997</strong>
            `;
            break;

        case "ovo":
            info.innerHTML = `
                <h4>🟣 OVO</h4>
                <p>Nomor OVO:</p>
                <strong>089614001997</strong>
            `;
            break;

        case "transfer":
            info.innerHTML = `
                <h4>🏦 Transfer Bank</h4>
                <p><strong>Bank BCA</strong></p>
                <p>No. Rekening: <strong>5491006693</strong></p>
                <p>a.n. DWI WIDIANINGTIAS</p>
            `;
            break;

        default:
            info.innerHTML = "";

    }

}


/* ======================================
   FORM PEMESANAN
====================================== */

document.getElementById("orderForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const wa = document.getElementById("wa").value.trim();
    const alamat = document.getElementById("alamat").value.trim();

    const menuSelect = document.getElementById("menu");
    const menu = menuSelect.options[menuSelect.selectedIndex].text;

    const jumlah = document.getElementById("jumlah").value;
    const total = document.getElementById("total").value;
    const pedas = document.getElementById("pedas").value;
    const catatan = document.getElementById("catatan").value.trim();

    const paymentSelect = document.getElementById("payment");
    const pembayaran = paymentSelect.options[paymentSelect.selectedIndex].text;

    const nomorWA = "6285774537978";

    const pesan = `Halo TAHU GEJROT PAKDE BURUNG,

Saya ingin memesan:

👤 Nama : ${nama}
📱 WhatsApp : ${wa}
📍 Alamat : ${alamat}

🍽 Menu : ${menu}
🍛 Jumlah : ${jumlah} Porsi
🌶 Pedas : ${pedas}

💰 Total : ${total}
💳 Pembayaran : ${pembayaran}

📝 Catatan :
${catatan || "-"}

Terima kasih.`;

    window.open(
        "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(pesan),
        "_blank"
    );

});


/* ======================================
   INISIALISASI
====================================== */

window.onload = function () {

    hitungTotal();
    showPaymentInfo();

};