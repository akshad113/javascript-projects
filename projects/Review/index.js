const pre = document.querySelector(".previous");
const next = document.querySelector(".next");
const name1 = document.querySelector("#name");
const role = document.querySelector(".role");
const arr = [1, 2, 3];
const brr = ["john", "angela", "harry"];
const crr = ["Web Developer", "Teacher", "Student"];
let n = 0;
window.addEventListener("DOMContentLoaded", function () {
  const item = arr[n];
  img.src = "img/profile" + arr[n] + ".jpg";
});
function showPerson(person) {
  const item = arr[person];
  img.src = "img/profile" + arr[person] + ".jpg";
  name1.textContent = brr[person];
  role.textContent = crr[person];
}
pre.addEventListener("click", function () {
  console.log("i am pressed at previous");
  if (n == 0) {
    n = arr.length - 1;
  } else {
    n = n - 1;
  }
  showPerson(n);
});
next.addEventListener("click", function () {
  if (n == arr.length - 1) {
    n = 0;
  } else {
    n = n + 1;
  }
  showPerson(n);
});
