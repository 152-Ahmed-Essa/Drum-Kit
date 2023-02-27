var alldrums = document.querySelectorAll(".drum");
for (i = 0; i < alldrums.length; i++) {
  alldrums[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    play(buttonInnerHtml);
    anemation(buttonInnerHtml);
  });
}

function play(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
  }
}

document.addEventListener("keypress", function (event) {
  play(event.key);
  anemation(event.key);
});

function anemation(activat) {
  document.querySelector("." + activat).classList.toggle("pressed");

  window.setTimeout(function () {
    document.querySelector("." + activat).classList.toggle("pressed");
  }, 100);
}
