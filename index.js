var blink = document.querySelector("h3");

setInterval(function () {
  blink.style.opacity = blink.style.opacity == 0 ? 1 : 0;
}, 1000);

var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomImagePath = "images/dice" + randomNum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImagePath);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImagePath2 = "images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImagePath2);

if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins !";
} else if (randomNum2 > randomNum1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins !";
} else {
  document.querySelector("h1").innerHTML = "Both Wins !";
}
