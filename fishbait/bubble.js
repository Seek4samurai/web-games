// Bubbles--------------------------------------------------------------------------

const bubblesArray = [];
const bubbleImage = new Image();
bubbleImage.src = "./bubble_pop_one/bubble_pop_frame_01.png";
class Bubble {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 100;
    this.radius = 50;
    this.speed = Math.random() * 5 + 1;
    this.distance;
    this.counted = false;
    this.sound = Math.random() <= 0.5 ? "sound1" : "sound2";
  }
  update() {
    this.y -= this.speed;
    const dx = this.x - player.x;
    const dy = this.y - player.y;
    this.distance = Math.sqrt(dx * dx + dy * dy);
  }
  draw() {
    // Bubble Hitbox--------------------------------------------------------------------------
    // ctx.fillStyle = "blue";
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // ctx.fill();
    // ctx.closePath();
    // ctx.stroke();
    ctx.drawImage(
      bubbleImage,
      this.x - 65,
      this.y - 65,
      this.radius * 2.6,
      this.radius * 2.6
    );
  }
}

const bubblePop1 = document.createElement("audio");
bubblePop1.src = "Plop.ogg";
const bubblePop2 = document.createElement("audio");
bubblePop2.src = "bubbles-single1.wav";

function handleBubbles() {
  if (gameFrame % 30 == 0) {
    bubblesArray.push(new Bubble());
  }
  for (let i = 0; i < bubblesArray.length; i++) {
    bubblesArray[i].update();
    bubblesArray[i].draw();
    if (bubblesArray[i].y < 0 - bubblesArray[i].radius * 2) {
      bubblesArray.splice(i, 1);
      i--;
    } else {
      if (bubblesArray[i].distance < bubblesArray[i].radius + player.radius) {
        if (!bubblesArray[i].counted) {
          if (bubblesArray[i].sound == "sound1") {
            bubblePop1.play();
          } else {
            bubblePop2.play();
          }
          score++;
          bubblesArray[i].counted = true;
          bubblesArray.splice(i, 1);
          i--;
        }
      }
    }
  }
  for (let i = 0; i < bubblesArray.length; i++) {}
}
