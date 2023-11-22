// Toggle icon header
const menuIcon = document.querySelector("#menu-icon");
// console.log(menuIcon);
const headerNav = document.querySelector(".menu");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  headerNav.classList.toggle("active");
});

// Active menu links
const link = document.querySelectorAll(".links");
console.log(link);
link.forEach((item) =>
  item.addEventListener("click", function () {
    // forEach duyệt các item để xoá cái đã item trước rồi mới add class active vào item mới.
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

// Scroll animation Javascript.
// Chọn tất cả các item cha cùng cấp với nhau.
// let item = document.querySelectorAll(".item");
// // Thêm sự kiện scroll cho document.
// document.addEventListener("scroll", (e) => {
//   // forEach duyệt qua từng item muốn add event animation.
//   item.forEach((item) => {
//     if (item.offsetTop - window.scrollY < 350) {
//       item.classList.add("active");
//     } else {
//       item.classList.remove("active");
//     }
//   });
// });

// Scroll animation reveal
// Reveal bottom.
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .services-box, .contact form, .reveal-botom",
  {
    reset: true,
    delay: 200,
    distance: "100px",
    duration: 1500,
    origin: "bottom",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
  }
);
// Reveal top
ScrollReveal().reveal(".home-content, .heading", {
  reset: true,
  delay: 200,
  distance: "100px",
  duration: 1500,
  origin: "top",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});
// Reveal left
ScrollReveal().reveal(".home h1, .about-img, .footer-text, .reveal-left", {
  reset: true,
  delay: 200,
  distance: "100px",
  duration: 1500,
  origin: "left",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});
// Reveal right
ScrollReveal().reveal(".home-content p, .about-content, .reveal-right", {
  reset: true,
  delay: 200,
  distance: "100px",
  duration: 1500,
  origin: "right",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

// typed text
const typedText = new Typed(".typed-text", {
  strings: ["Frontend Developer", "Freelancer", "ReactJS Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
