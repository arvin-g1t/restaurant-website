// ===== BURGER =====

const burger = document.getElementById("burger");
const nav = document.getElementById("navLinks");

if (burger && nav) {
burger.addEventListener("click", () => {

nav.classList.toggle("active");

const expanded = burger.getAttribute("aria-expanded") === "true";
burger.setAttribute("aria-expanded", !expanded);

});
}


// ===== MAP =====

const mapBtn = document.getElementById("loadMapBtn");
const mapContainer = document.getElementById("mapContainer");
const overlay = document.getElementById("mapOverlay");

if (mapBtn && mapContainer && overlay) {

mapBtn.addEventListener("click", () => {

mapContainer.innerHTML = `
<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d643626.3539623958!2d6.955666!3d50.9391533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25633cf17dc5%3A0x50c9833d3b31b434!2sCello%20Caf%C3%A9%20%26%20Restaurant!5e0!3m2!1sde!2sde!4v1776149717530!5m2!1sde!2sde"
style="width:100%; height:100%; border:0;"
loading="lazy"
></iframe>
`;

overlay.style.display = "none";

});

}

// NAV AUTO CLOSE

const navLinksItems = document.querySelectorAll(".nav-links a");

navLinksItems.forEach(link => {
link.addEventListener("click", () => {

nav.classList.remove("active");
burger.setAttribute("aria-expanded", "false");

});
});