let thisPage = 1; // mặc định = 1
limit = 6;
// Lấy danh sách item
let list = document.querySelectorAll(".list .item");
function loadItem() {
  let beginGet = (thisPage - 1) * limit;
  let endGet = limit * thisPage - 1;
  list.forEach((item, key) => {
    // item chính là từng item bên trong
    // key vị trí của item đó
    if (key >= beginGet && key <= endGet) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  listPage(); // Tính lại vị trí trang thời điểm hiện tại.
}
loadItem();

function listPage() {
  // Tìm tổng số trang
  let count = Math.ceil(list.length / limit);
  console.log("count", count);
  document.querySelector(".listPage").innerHTML = ""; // => Xoá hết nội dung bên trong tiến hành làm mới

  //   Prev
  if (thisPage != 1) {
    let prev = document.createElement("li");
    prev.innerText = "<< prev";
    prev.setAttribute("onclick", "changePage(" + (thisPage - 1) + ")");
    document.querySelector(".listPage").appendChild(prev);
  }

  for (i = 1; i <= count; i++) {
    let newPage = document.createElement("li");
    newPage.innerText = i; // mỗi thẻ li sẽ cho 1 đoạn text = i(chính là số trang)
    if (i === thisPage) {
      // i: page đang tính
      // thisPage: trang hiện tại
      // => Nếu bằng nhau thì cho 1 class active vào
      newPage.classList.add("active");
    }
    // newPage.setAttribute("onclick", "changePage(" + i + ")");
    // newPage.setAttribute("onclick", "changePage(" + i + ")");
    newPage.setAttribute("onclick", "changePage(" + i + ")");
    document.querySelector(".listPage").appendChild(newPage); // => appendChild(newPage) để thêm newpage vào bên trong.
  }

  if (thisPage == 1) {
    let next = document.createElement("li");
    next.innerText = "next >>";
    next.setAttribute("onclick", "changePage(" + (thisPage + 1) + ")");
    document.querySelector(".listPage").appendChild(next);
  }
}
function changePage(i) {
  thisPage = i;
  loadItem();
}
