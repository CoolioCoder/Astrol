var bg, sleep, brush, gym, eat, drink, move;

function preload() {
bg= loadImage("images/iss.png")
sleep= loadAnimation("images/sleep.png")
brush= loadAnimation("images/brush.png")
eat= loadAnimation("images/eat1.png", "images/eat2.png")
gym= loadAnimation("images/gym21.png", "images/gym22.png")
drink= loadAnimation("images/drink1.png", "images/drink2.png")
move= loadAnimation("images/move.png", "images/move1.png")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);  
  drawSprites();
}