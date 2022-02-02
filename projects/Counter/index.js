const plus = document.querySelector("#plus");
const reset = document.querySelector("#reset");
const minus = document.querySelector("#minus");
let count = 0;
plus.addEventListener("click", function () {
  console.log("came in");
  count = count + 1;
  document.querySelector(".count").textContent = count;
});

reset.addEventListener("click", function () {
  count = 0;
  document.querySelector(".count").textContent = count;
});

minus.addEventListener("click", function () {
  if (count <= 0) {
    document.querySelector(".count").textContent = "Error";
  } else {
    count = count - 1;
    document.querySelector(".count").textContent = count;
  }
});
