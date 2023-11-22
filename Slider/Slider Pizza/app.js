let prev = document.getElementById("prev");
let next = document.getElementById("next");
let image = document.querySelector(".images");
let items = document.querySelectorAll(".images .item");
let contents = document.querySelectorAll(".content .item");

let rotate = 0;
let active = 0;
let countItem = items.length;
let rotateAdd = 360 / countItem;

// function nextSlider() {}
next.addEventListener("click", function () {
  active = active + 1 > countItem - 1 ? 0 : active + 1;
  rotate = rotate + rotateAdd;
  show();
});
// function prevSlider() {}
prev.addEventListener("click", function () {
  active = active - 1 < 0 ? countItem - 1 : active - 1;
  rotate = rotate - rotateAdd;
  show();
});
function show() {
  image.style.setProperty("--rotate", rotate + "deg");
//   image.style.setProperty("--rotate", rotate + "deg");
  contents.forEach((content, item) => {
    if (item == active) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });
  setInterval(autoNext);
}
const autoNext = setInterval(function () {
  next.click();
}, 5000);
