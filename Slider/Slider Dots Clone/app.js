let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let active = 0; // vị trí đang được active.
let lengthItems = items.length - 1;

next.addEventListener("click", function () {
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider();
});

prev.addEventListener("click", function () {
  if (active - 1 < 0) {
    active = 0;
  } else {
    active = active - 1;
  }
  reloadSlider();
});

function reloadSlider() {
  let checkleft = items[active].offsetLeft; // checkleft khoảng cách từ bên trái class list đến mép bên trái của item đang được active
  list.style.left = -checkleft + "px"; // dịch chuyển sang bên trái một khoảng vừa bằng với checkleft
  //   let lastActiveDot = document.querySelector(".slider .dots li");
  //   lastActiveDot.classList.remove("active");
  //   dots.classList.add("active");
  let lastActiveDot = document.querySelectorAll(".slider .dots li");
  lastActiveDot.forEach((item) => {
    item.classList.remove("active");
  });
  dots[active].classList.add("active"); // Trỏ đến vị trí active mà item đang được active
  clearInterval(autoNext); // Xoá hoành vi lặp lại để khi click nó không bị lỗi
}

dots.forEach((li, index) => {
  // item vị trí tương ứng của thẻ li
  li.addEventListener("click", function () {
    active = index;
    reloadSlider();
  });
});

// Tự động chạy slider
let autoNext = setInterval(function () {
  next.click();
}, 3500);
