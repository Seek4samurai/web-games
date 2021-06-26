// Canvas Setup--------------------------------------------------------------------------
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

let score = 0;
let gameFrame = 0;
let gameSpeed = 1;
ctx.font = "50px Georgia";

const menuDom = document.getElementById("menu");
const playBtn = document.getElementById("single");

// Animation Loop------------------------------------------------------------------
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  renderDeadBtn();
  handleBackground();
  handleBackground2()
  handleBubbles();
  player.update();
  player.draw();
  ctx.fillStyle = "black";
  ctx.fillText("Score : " + score, 10, 50);
  gameFrame++;
  requestAnimationFrame(animate);
}

// Resize--------------------------------------------------------------------------
window.addEventListener("resize", function () {
  canvasPosition = canvas.getBoundingClientRect();
});

// Animate on Play ----------------------------------------------------------------
playBtn.addEventListener("click", () => {
  document.body.removeChild(menuDom);
  animate();
});

// Replay Button ------------------------------------------------------------------
function renderDeadBtn() {
  if (score === 25) {
    location.reload();
    alert("Congratulations! You beat the score.");
    alert("Hope you liked the project!");
  }
}
