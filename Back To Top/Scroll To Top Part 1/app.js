const backToTopButton = document.querySelector("#back-to-top-btn");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    // show backToTopButton
    backToTopButton.style.display = "block";
  } else {
    // Hide backToTopButton
    backToTopButton.style.display = "none";
  }
}

backToTopButton.addEventListener("click", backToTop);
function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
//   window.scrollTo(0, 0);
}
