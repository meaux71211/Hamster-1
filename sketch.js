function preload() {
  HamsterIMG = loadAnimation("Hamster.jpg"); 
  TreatsIMG = loadImage("Treats.png");
  WheelIMG = loadAnimation("Wheel.gif");
  GroundIMG = loadImage("Ground.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
 
   ground = createSprite(width/2-350,height/2,width/2,20);
   ground.velocityX = -7
   ground.scale = 2.75;
   ground.addImage(GroundIMG);
   inviGround = createSprite(width/2-350,height/200,width/2);
   inviGround.visible = false;
   Hamster = createSprite(100,height-50,50,50)
   Hamster.addAnimation("running",HamsterIMG);
   Hamster.scale = 0.6;
   score = 0;
}

function draw() 
{
  background(30);
  text("Score: "+score,width-100,50)
  drawSprites();
  if(ground.x<0) {
    ground.x = ground.width/2;
  }
  if(keyDown("space")) {
    Hamster.velocityY = -15
  }
  Hamster.velocityY+=1.5;                   
  Hamster.collide(inviGround);  
  spawnTreats();  
  spawnWheels();
}
function spawnTreats() {
  if(frameCount%100===0) {
    Treats = createSprite(width-300,height/2+50,50,50);
    Treats.y = Math.round(random(height/2+20,height/2+80));
    Treats.addImage(TreatsIMG);
    Treats.velocityX = -3;
    Treats.scale = 0.2;
  }
}
function spawnWheels() {
  if(frameCount%200===0) {
    Wheels = createSprite(width-300,height/2+200,50,50);
    Wheels.addAnimation("Wheels",WheelIMG);
    Wheels.velocityX = -4;
    Wheels.scale = 2.5;
  }
}




