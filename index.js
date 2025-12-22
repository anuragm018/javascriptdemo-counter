const inbtn = document.getElementById("inbtn");
const rebtn = document.getElementById("rebtn");
const debtn = document.getElementById("debtn");
const containerlabel = document.getElementById("containerlabel");
let count = 0;

inbtn.onclick = function () {
  count++;
  containerlabel.textContent = count;
}
debtn.onclick = function () {
  count--;
  containerlabel.textContent = count;
}
rebtn.onclick = function () {
  count = 0;
  containerlabel.textContent = count;
}
