const img = document.querySelector("img");
const icons = document.querySelector(".icons");
img.addEventListener("click", function () {
  this.classList.toggle("active");
  icons.classList.toggle("active");
});
