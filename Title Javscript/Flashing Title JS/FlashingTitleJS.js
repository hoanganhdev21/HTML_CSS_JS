let activeAlert = false;
const title = "coding_dev";
const msg = "(6) Messages";
const changeTitle = setInterval(() => {
  document.title = activeAlert ? title : msg;
  activeAlert = !activeAlert;
}, 1000);

async function getData() {
  return await Promise.resolve("I made it!");
}
const data = getData();
// console.log("asyn await", data);
