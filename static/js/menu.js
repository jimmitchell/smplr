const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const siteTitle = document.querySelectorAll(".site-title");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));
siteTitle.addEventListener("click", closeMenu);

function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	siteTitle.classList.toggle("active");
}

function closeMenu() {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
	siteTitle.classList.remove("active");
}