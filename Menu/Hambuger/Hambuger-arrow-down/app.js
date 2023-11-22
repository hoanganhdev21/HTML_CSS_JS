const hambuger = document.querySelector(".hambuger");
const navMenu = document.querySelector(".navbar-list");

// Sự kiện click vào hambuger
hambuger.addEventListener("click", () => {
  hambuger.classList.toggle("active");
  navMenu.classList.toggle("active");
  // console.log("hambuger clicked")
});

// Khi click vào thẻ a sẽ thoát khỏi chế dộ reposive
document.querySelectorAll(".navbar-list--item").forEach((n) =>
  n.addEventListener("click", () => {
    hambuger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
