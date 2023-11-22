let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.addEventListener("click", function () {
  const widthItem = document.querySelector(".item").offsetWidth;
  document.getElementById("form-list").scrollLeft += widthItem;
});

prev.addEventListener("click", function () {
  const widthItem = document.querySelector(".item").offsetWidth;
  document.getElementById("form-list").scrollLeft -= widthItem;
});

// function scroll() {
//   const widthItem = document.querySelector(".item").offsetWidth;
// }
