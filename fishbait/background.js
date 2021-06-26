//Animated BG----------------------------------------------------------------------

const background = new Image();
background.src = "background1.png";

const BG = {
  x1: 0,
  x2: canvas.width,
  y: 0,
  width: canvas.width,
  height: canvas.height,
};

function handleBackground() {
  BG.x1 -= gameSpeed;
  if (BG.x1 < -BG.width) BG.x1 = BG.width;
  BG.x2 -= gameSpeed;
  if (BG.x2 < -BG.width) BG.x2 = BG.width;
  ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
  ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height);
}

const background2 = new Image();
background2.src = "canvasbg.gif";

const BG2 = {
  x1: 0,
  x2: canvas.width,
  y: 0,
  width: canvas.width,
  height: canvas.height,
};

function handleBackground2() {

  ctx.drawImage(background2, BG2.x1, BG2.y, BG2.width, BG2.height);
  ctx.drawImage(background2, BG2.x2, BG2.y, BG2.width, BG2.height);
}
