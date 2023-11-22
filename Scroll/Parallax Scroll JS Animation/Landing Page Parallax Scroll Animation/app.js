// toggle icon header
const menuIcon = document.querySelector("#menu-icon");
// console.log(menuIcon);
const headerNav = document.querySelector(".menu");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  headerNav.classList.toggle("active");
});

// active menu links
const link = document.querySelectorAll(".links");
console.log(link);
link.forEach((item) =>
  item.addEventListener("click", function () {
    // Lặp lại các item để xoá cái đã item trước rồi mới add class active vào item mới.
    [...link].forEach((item) => {
      item.classList.remove("active");
    });
    // Add class active vào item mới.
    item.classList.add("active");
  })
);

// Click item menu thoát khỏi menu.
const links = document.querySelectorAll(".links");
links.forEach((item) =>
  item.addEventListener("click", function () {
    // console.log("click");
    menuIcon.classList.toggle("bx-x");
    headerNav.classList.remove("active");
  })
);

// Scroll animation.
// Chọn tất cả các item cha cùng cấp với nhau.
let item = document.querySelectorAll(".item");
// Thêm sự kiện scroll cho document.
document.addEventListener("scroll", (e) => {
  // Lặp qua từng item muốn add active animation
  item.forEach((item) => {
    if (item.offsetTop - window.scrollY < 350) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});
