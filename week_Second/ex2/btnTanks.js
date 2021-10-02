function btnUp() {
  let btnUp = document.getElementById("myTanks").offsetTop;
  btnUp = btnUp - 19;
  document.getElementById("myTanks").style.top = btnUp + "px";
}
function btnLeft() {
  let btnLeft = document.getElementById("myTanks").offsetLeft;
  btnLeft = btnLeft - 19;
  document.getElementById("myTanks").style.left = btnLeft + "px";
}

function btnRight() {
  let btnRight = document.getElementById("myTanks").offsetLeft;
  btnRight = btnRight + 19;
  document.getElementById("myTanks").style.left = btnRight + "px";
}
function btnDown() {
  let btnDown = document.getElementById("myTanks").offsetTop;
  btnDown = btnDown + 19;
  document.getElementById("myTanks").style.top = btnDown + "px";
}
