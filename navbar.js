/* ==========================================
   NAVBAR.JS
   TAHU GEJROT PAKDE BURUNG
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".header");
    const navbar = document.getElementById("navbar");
    const burger = document.getElementById("burger");
    const overlay = document.getElementById("menuOverlay");
    const navLinks = document.querySelectorAll("#navbar a");

    if (!header || !navbar || !burger) return;

    // ==========================
    // Toggle Menu
    // ==========================

    function openMenu() {

        navbar.classList.add("active");
        burger.classList.add("active");

        if (overlay) {
            overlay.classList.add("show");
        }

        document.body.classList.add("no-scroll");

    }

    function closeMenu() {

        navbar.classList.remove("active");
        burger.classList.remove("active");

        if (overlay) {
            overlay.classList.remove("show");
        }

        document.body.classList.remove("no-scroll");

    }

    burger.addEventListener("click", () => {

        navbar.classList.contains("active")
            ? closeMenu()
            : openMenu();

    });

    // ==========================
    // Klik Overlay
    // ==========================

    if (overlay) {

        overlay.addEventListener("click", closeMenu);

    }

    // ==========================
    // Klik Menu
    // ==========================

    navLinks.forEach(link => {

        link.addEventListener("click", closeMenu);

    });

    // ==========================
    // Tombol ESC
    // ==========================

    document.addEventListener("keydown", e => {

        if (e.key === "Escape") {

            closeMenu();

        }

    });

    // ==========================
    // Sticky Header
    // ==========================

    function stickyHeader() {

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    }

    window.addEventListener("scroll", stickyHeader);

    stickyHeader();

});