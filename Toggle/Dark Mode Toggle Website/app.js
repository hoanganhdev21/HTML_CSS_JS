// Đầu tiên mình khai báo 1 biến là toggleSwitch truy xuất tới DOM là Toggle, và một biến là currentTheme để truy xuất tới một localStorage có tên là theme.
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");
// Sau đó mình kiểm tra xem có localStorage nào tên là theme không, nếu có thì mình thiết lập cho thẻ html (root) có thuộc tính data-theme là currentTheme, đồng thời mình kiểm tra xem theme hiện tại có phải là dark không, nếu phải thì mình sẽ thiết lập cho Toggle đó checked là true, tức là đã nhấn vào.
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}
// Tiếp theo mình viết một hàm có tên là switchTheme để khi nhấn vào Toggle thì sẽ gọi hàm này. Hàm này kiểm tra 2 điều kiện, nếu Toggle được nhấn vào thì sẽ thiết lập theme là dark đồng thời tạo localStorage theme là dark luôn, ngược lại thì thiết lập theme là light.
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}
// Và cuối cùng là sự kiện click của Toggle, nghĩa là khi chúng nhấn vào nó sẽ gọi hàm switchTheme viết ở trên để xử lý. Lúc này chúng ta sẽ có kết quả như mong đợi.
toggleSwitch.addEventListener("click", switchTheme);
