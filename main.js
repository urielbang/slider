let counter = 0;
let idRightinterval;
let idLeftInteval;

document.querySelector("#right").addEventListener("click", () => {
  clearInterval(idLeftInteval);
  clearInterval(idRightinterval);
  idRightinterval = setInterval(sliderMoverRight, 10);
});

function sliderMoverRight() {
  clearInterval(idLeftInteval);
  document.querySelector(".images").style = `translate: ${counter}px;`;
  counter--;
  if (counter == -2300) {
    clearInterval(idRightinterval);
  }
}
function sliderMoverLeft() {
  document.querySelector(".images").style = `translate: ${counter}px;`;
  counter++;
  if (counter == 0) {
    clearInterval(idLeftInteval);
  }
}
document.querySelector("#left").addEventListener("click", () => {
  clearInterval(idRightinterval);
  clearInterval(idLeftInteval);
  idLeftInteval = setInterval(sliderMoverLeft, 10);
});
