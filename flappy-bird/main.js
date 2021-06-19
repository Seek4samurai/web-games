const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let spacePresssed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 4;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //ctx.fillRect(10, canvas.height - 90, 50, 50);
  handleObstacles();
  if (handleCollisions()) return;
  bird.update();
  bird.draw();
  ctx.fillStyle = "hsla(" + hue + ", 100%, 50%, 1)";
  ctx.font = "90px Georgia";
  ctx.strokeText(score, 450, 70);
  ctx.fillText(score, 450, 70);
  handleParticles();
  handleCollisions();
  requestAnimationFrame(animate);
  angle += 0.12;
  hue += 10;
  frame++;
}

animate();

window.addEventListener("keydown", function (e) {
  if (e.code === "Space") spacePresssed = true;
});

window.addEventListener("keyup", function (e) {
  if (e.code === "Space") spacePresssed = false;
});

const bang = new Image();
bang.src = "bang.png";
function handleCollisions() {
  for (let i = 0; i < obstaclesArray.length; i++) {
    if (
      bird.x < obstaclesArray[i].x + obstaclesArray[i].width &&
      bird.x + bird.width > obstaclesArray[i].x &&
      ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) ||
        (bird.y > canvas.height - obstaclesArray[i].bottom &&
          bird.y + bird.height < canvas.height))
      //Collision Detection
    ) {
      ctx.drawImage(bang, bird.x, bird.y, 50, 50);
      ctx.font = "25px Georgia";
      ctx.fillStyle = "black";
      ctx.fillText(
        "Game Over, Your Score is " + score,
        160,
        canvas.height / 2 - 10
      );
      return true;
    }
  }
}
