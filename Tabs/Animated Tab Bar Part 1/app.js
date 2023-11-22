const list = document.querySelectorAll(".list");
const li = document.querySelectorAll("li");
list.forEach((item) =>
  item.addEventListener("click", function () {
    // e.preventDefault();
    console.log("click");
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  })
);
