const colors = ["red", "blue", "green", "yellow", "lightgrey", "aquamarine,saddlebrown"];
var btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  var ran = random();
  document.body.style.backgroundColor = colors[ran];
  document.querySelector(".color").textContent = colors[ran];
});

function random() {
  return Math.floor(Math.random() * colors.length);
}
