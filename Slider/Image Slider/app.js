// document.getElementById("next").onclick = function () {
//   let lists = document.querySelectorAll(".item");
//   document.getElementById("slide").appendChild(lists[0]);
// };
// document.getElementById("prev").onclick = function () {
//   let lists = document.querySelectorAll(".item");
//   document.getElementById("slide").prepend(lists[lists.length - 1]);
// };
let next = document.getElementById("next");
let prev = document.getElementById("prev");

console.log(next);

next.addEventListener("click", function () {
  let list = document.querySelectorAll(".item"); // lấy toàn bộ item của slider
  document.getElementById("slide").appendChild(list[0]);
});

prev.addEventListener("click", function () {
  let list = document.querySelectorAll(".item"); // lấy toàn bộ item của slider
  document.getElementById("slide").prepend(list[list.length - 1]);
});
