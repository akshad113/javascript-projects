var btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const colors = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
btn.addEventListener("click", function () {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex = hex + colors[num()];
  }
  document.body.style.backgroundColor = hex;
  document.querySelector(".color").textContent = hex;
});

function num() {
  return Math.floor(Math.random() * colors.length);
}
