const toggle = document.querySelector(".nav__toggle");
console.log(toggle);
const nav = document.querySelector(".nav__menu");
toggle.addEventListener("click", () => {
  // Add show-menu class to nav menu.
  nav.classList.toggle("show-menu");
  // Add show-icon to show and hide the menu icon.
  toggle.classList.toggle("show-icon");
});

