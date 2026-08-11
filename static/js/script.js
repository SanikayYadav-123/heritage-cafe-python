document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    if (toggle && nav) toggle.addEventListener("click", () => nav.classList.toggle("open"));
    document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => nav?.classList.remove("open")));
    const flash = document.querySelector(".flash-wrap");
    if (flash) setTimeout(() => { flash.style.opacity = "0"; flash.style.transition = "opacity .5s"; setTimeout(() => flash.remove(), 500); }, 3500);
});
