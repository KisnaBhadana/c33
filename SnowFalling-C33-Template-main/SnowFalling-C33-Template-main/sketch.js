
function preload(){
backgroundImg = loadImage("snow2.jpg");
}


function setup() {
  createCanvas(2000,1000);
  bg1 = createSprite(500, 50, 400, 400);
  bg1.addAnimation("bg",backgroundImg);
}

function draw() {
background("white");
  bg1.display();
  drawSprites();
  
}