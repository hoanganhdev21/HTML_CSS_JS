let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.addEventListener("click", function () {
  let list = document.querySelectorAll(".item"); // lấy toàn bộ item của slider
  document.getElementById("slide").appendChild(list[0]);
  // clearInterval(autoNext);
});

prev.addEventListener("click", function () {
  let list = document.querySelectorAll(".item"); // lấy toàn bộ item của slider
  document.getElementById("slide").prepend(list[list.length - 1]);
  // clearInterval(autoNext);
});

let autoNext = setInterval(function () {
  next.click();
}, 3500);
