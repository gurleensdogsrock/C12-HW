var garden;
var rabbit;
var gardenImg;
var rabbitImg;
var apples;
var applesImg;
var leaves;
var leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  createCanvas(400,400);
  var rand = Math.round(random(1,100))
  console.log(rand)
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnApples()

  spawnLeaves()
  drawSprites();
}

function spawnApples(){
  if (frameCount%80==0){
    apples = createSprite(random(50,350),40,10,10);
    apples.addImage(applesImg);
    apples.y=Math.round(random(10,60));
    apples.scale=0.1;
    apples.velocityY=3;
  }
}

function spawnLeaves(){
if (frameCount%80==0){
  leaves = createSprite(random(50,350),40,10,10);
  leaves.addImage(leavesImg);
  leaves.y=Math.round(random(10,60));
  leaves.scale=0.1;
  leaves.velocityY=3;
}

}
