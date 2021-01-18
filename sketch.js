
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime =0;
var ground;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,10,10);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  console.log(frameCount)
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
 

  
}


function draw() {
 background("white");
  if(ground.x<0){
    ground.velocityX = -4;
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&&monkey.y>250){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  
  survivaltime = survivaltime + Math.round(getFrameRate()/60);
  
  monkey.collide(ground);
  
  spawnstone();
  
  spawnbanana();
  
  drawSprites();
  
  text("SURVIVALTIME : "+survivaltime,150,50)
}

function spawnstone(){
  if(World.frameCount%300===0){
    obstacle = createSprite(400,315,50,50)
    obstacle.velocityX = -10;
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.2;
    obstacleGroup.add(obstacle);
    obstacle.lifetime = 50;
  }
}


function spawnbanana(){
   if(World.frameCount%80===0){
     banana = createSprite(400,180,5,5);
     banana.addImage(bananaImage);
     banana.scale = 0.1;
     banana.velocityX = -8;
     banana.y = Math.round(random(170,250))
     bananaGroup.add(banana);
     banana.lifetime = 50;
}
}
