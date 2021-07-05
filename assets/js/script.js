// mobile friendly navigation function
var btnNav = document.querySelector(".mobile-menu-button");
var menu = document.querySelector(".mobile-menu");

// add eventListener
btnNav.addEventListener("click", () => {
menu.classList.toggle("hidden");
});