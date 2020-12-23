var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey,monkey_running
var ground, invisibleGround, groundImage;

var banana ,bananaImage, obstacle, obstacleImage

var FoodGroup, obstacleGroup

var score

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
    OImage = loadImage("obstacle.png");
  
  
  }

function setup() {
  createCanvas(600, 600);

  
  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("moving",monkey_running);
  
  

  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4
  
  
  //create Obstacle and Cloud Groups
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
  
  
  
  
}

function draw() {
  
  background(180);
  //displaying score
  
  
  
  
    
    
    
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
    //spawn the Obstacle
    spawnObstacles();
    
    //spawn the Food
    spawnFood();
  
 monkey.collide(ground)
  
  
  
  


  drawSprites();
}





   



function spawnObstacles () {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var O = createSprite(600,320,40,10);
  
  O.addImage(OImage);
    O.scale = 0.1;
    O.velocityX = -3;
    
     //assign lifetime to the variable
    O.lifetime = 200;
    
    //adjust the depth

    
    //add each cloud to the group
    obstaclesGroup.add(O);
  }
}

function spawnFood () {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var F = createSprite(600,120,40,10);
  F.y = Math.round(random(80,120));
  F.addImage(bananaImage);
    F.scale = 0.2;
    F.velocityX = -3;
    
     //assign lifetime to the variable
    F.lifetime = 200;
    
    //adjust the depth

    
    //add each cloud to the group
    FoodGroup.add(F);
  }
}

