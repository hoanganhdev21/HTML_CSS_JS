let icon = document.querySelector("#icon");
let navBar = document.querySelector(".navbar");
let body = document.body;

icon.addEventListener("click", () => {
  icon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
  navBar.classList.toggle("dark-nav");
});
