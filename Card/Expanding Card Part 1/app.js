// Cách 1:
// const expendingItems = document.querySelectorAll(".expending-item");
// console.log(expendingItems);
// expendingItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     // Xoá active cũ trước khi active vào cái mới
//     expendingItems.forEach((item) => item.classList.remove("active"));
//     item.classList.add("active");
//   });
// });

// Cách 2:
const expendingItems = document.querySelectorAll(".expending-item");
expendingItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Xoá class active ở item cũ rồi mới add class active vào item mới.
    removeActiveItem();
    item.classList.add("active");
  });
});

// => Xoá class active ở item cũ rồi mới add active vào item mới.
function removeActiveItem() {
  expendingItems.forEach((item) => {
    item.classList.remove("active");
  });
}
