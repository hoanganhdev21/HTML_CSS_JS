const hamburger = document.querySelector(".hamburger-icons--close");
const hamburgerArrowDown = document.querySelector(".hamburger-icons--arrowdown");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
});

hamburgerArrowDown.addEventListener("click", () => {
    hamburgerArrowDown.classList.toggle("active");
  });