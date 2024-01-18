const play = document.querySelector("body .container .play");
const xbox = document.querySelector("body .container .xbox");

function change(ele, other) {
  ele.classList.add("active");
  other.classList.remove("active");
}

play.addEventListener("mouseover", function () {
  change(play, xbox);
});

xbox.addEventListener("mouseover", function () {
  change(xbox, play);
});

window.addEventListener("mouseout", function () {
  play.classList.remove("active");
  xbox.classList.remove("active");
});
