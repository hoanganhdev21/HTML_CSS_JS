let noti = document.querySelector(".notifications");
let success = document.getElementById("success");
let error = document.getElementById("error");
let warning = document.getElementById("warning");
let info = document.getElementById("info");
// console.log(noti, success, error, warning, info);

function createToast(type, icon, title, text) {
  //   console.log(times.parentNode);
  let newToast = document.createElement("div");
  newToast.innerHTML = `<div class="toast ${type}">
  <i class="${icon}"></i>
  <div class="content">
  <div class="title">${title}</div>
  <span>${text}</span>
  </div>
  <i class="fa fa-times"></i>
  </div>`;
  noti.appendChild(newToast);
  newToast.timeOut = setTimeout(function () {
    newToast.remove();
  }, 5000);
  console.log(newToast);
  let times = document.querySelectorAll(".fa-times");
  //   let toast = document.querySelector(".toast");
  times.forEach((item) => {
    item.addEventListener("click", function () {
      console.log("click");
      newToast.remove();
    });
  });
}

success.addEventListener("click", function () {
  let type = "success";
  let icon = "fa fa-check";
  let title = "Success";
  let text = "This is success toast.";
  createToast(type, icon, title, text);
});

error.addEventListener("click", function () {
  let type = "error";
  let icon = "fa fa-exclamation";
  let title = "Error";
  let text = "This is error toast.";
  createToast(type, icon, title, text);
});

warning.addEventListener("click", function () {
  let type = "warning";
  let icon = "fa fa-check";
  let title = "Warning";
  let text = "This is warning toast.";
  createToast(type, icon, title, text);
});

info.addEventListener("click", function () {
  let type = "info";
  let icon = "fa fa-exclamation";
  let title = "Info";
  let text = "This is info toast.";
  createToast(type, icon, title, text);
});
