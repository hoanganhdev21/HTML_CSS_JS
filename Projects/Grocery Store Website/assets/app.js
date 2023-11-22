let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

searchBtn.onclick = () => {
  searchForm.classList.toggle("active");

  // remove những cái đã click trước
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};

// Shopping cart
let shoppingCart = document.querySelector(".shopping-cart");
let cartBtn = document.querySelector("#cart-btn");
cartBtn.onclick = () => {
  shoppingCart.classList.toggle("active");

  // remove những cái đã click trước
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
  searchForm.classList.remove("active");
};

// form login
let loginForm = document.querySelector(".login-form");
let loginBtn = document.querySelector("#login-btn");
loginBtn.onclick = () => {
  loginForm.classList.toggle("active");

  // remove những cái đã click trước
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
  shoppingCart.classList.remove("active");
  searchForm.classList.remove("active");
};

// show menu reponsive
let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");
menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");

  // remove những cái đã click trước
  loginForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  searchForm.classList.remove("active");
};

// Xoá các form khi nhấn ra ngoài dom
document.addEventListener("click", function (e) {
  if (!searchBtn.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!cartBtn.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }

  if (!loginBtn.contains(e.target)) {
    loginForm.classList.remove("active");
  }

  if (!menuBtn.contains(e.target)) {
    navbar.classList.remove("active");
    menuBtn.classList.remove("fa-times");
  }
});

// Active menu links
const link = document.querySelectorAll(".links");
// console.log(link);
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
    menuBtn.classList.remove("fa-times");
    navbar.classList.remove("active");
  })
);

// Slider Swiper js
var swiper = new Swiper(".product-slider, .review-slider", {
  // slidesPerView: 3,
  spaceBetween: 30, // Khoảng cách giữa các item
  // centeredSlides: true, // Bắt đầu chạy từ vị trí giữa true thì thực hiện false thì không
  freeMode: true,
  autoplay: {
    delay: 3500, // độ trễ
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

// Scroll Reveal
ScrollReveal({
  reset: true,
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".footer .box, .credit", {
  origin: "bottom",
  interval: 50,
});
ScrollReveal().reveal(".content h3", { origin: "left" });
ScrollReveal().reveal(".heading", { origin: "top" });
ScrollReveal().reveal(".content p", { origin: "right" });
ScrollReveal().reveal(
  ".features .box-container .box, .categories .box, .blogs .box",
  {
    interval: 50,
    origin: "bottom",
  }
);
