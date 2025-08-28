document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (toggle && nav) { // seguridad por si algún HTML no tiene menú
        toggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
});
