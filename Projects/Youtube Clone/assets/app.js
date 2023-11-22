let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");

menuIcon.onclick = function () {
  // Click menu thu nhỏ sidebar.
  sidebar.classList.toggle("small-sidebar");
  // Khi click menu thì container cách left 7%.
  container.classList.toggle("large-container");
};
