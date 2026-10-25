const btnLlamar = document.getElementById("btn-llamar");
const btnCorreo = document.getElementById("btn-enviar-correo");

if (btnCorreo) {
    btnCorreo.addEventListener("click", function () {
        const emailDecoded = atob("ZXJpY2tzYW11ZWxoZXJuYW5kZXp2ZWxlekBvdXRsb29rLmNvbQ==");
        window.location.href = "mailto:" + emailDecoded;
    });
}

if (btnLlamar) {
    btnLlamar.addEventListener("click", function () {
        const phoneLinkValue = atob("ODI5NzI2NjcxNw==");
        window.location.href = "tel:" + phoneLinkValue;
    });
}

const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");
const links = document.querySelectorAll(".mobile-link");
const themeButtons = document.querySelectorAll(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');

function updateThemeButtons(isDark) {
    themeButtons.forEach((button) => {
        const icon = button.querySelector("i");
        button.setAttribute("aria-pressed", String(isDark));
        button.setAttribute("aria-label", isDark ? "Activar modo claro" : "Activar modo oscuro");
        icon.classList.toggle("fa-sun", isDark);
        icon.classList.toggle("fa-moon", !isDark);
    });
}

updateThemeButtons(document.documentElement.classList.contains("dark"));

themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        themeColor.setAttribute("content", isDark ? "#0b1120" : "#f8fafc");
        updateThemeButtons(isDark);
    });
});

btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    const icon = btn.querySelector("i");
    const isOpen = menu.classList.contains("open");
    btn.setAttribute("aria-expanded", String(isOpen));
    btn.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    if (isOpen) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-label", "Abrir menú");
        const icon = btn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});
