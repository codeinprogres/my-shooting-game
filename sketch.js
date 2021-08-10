var player, playerImg1, playerImg2, playerImg3, playerImg4;
var PLAY, END, START, PAUSE, OPTIONS, RULES, CREDITS, SURE, OPTIONS1, CREDITS1;
PLAY = 1;
END = 0;
START = 2;
PAUSE = 3;
OPTIONS = 4;
RULES = 5;
CREDITS = 6;
SURE = 7;
OPTIONS1 = 8;
CREDITS1 = 9;
var gameState = PLAY;
var sniper, sniperImg1, sniperImg2, sniperImg3, sniperImg4;
var ground;
var laser, laser1Img, laser2Img, laser3Img, laser4Img;

function preload(){
  playerImg1 = loadImage("carUp.png");
  playerImg2 = loadImage("carDown.png");
  playerImg3 = loadImage("carLeft.png");
  playerImg4 = loadImage("carRight.png");
  ground = loadImage("grass.png");
  sniperImg1 = loadImage("sniperUp.png");
  sniperImg2 = loadImage("sniperDown.png");
  sniperImg3 = loadImage("sniperLeft.png");
  sniperImg4 = loadImage("sniperRight.png");
  laser1Img = loadImage("laserUp.png");
  laser2Img = loadImage("laserDown.png");
  laser3Img = loadImage("laserLeft.png");
  laser4Img = loadImage("laserRight.png");
}

function setup(){
   createCanvas(800, 800);


   laser = createSprite(400, 400, 15, 30);
   laser.addImage(laser1Img);
   laser.scale = 0.25;

   
   player = createSprite(400,400,60,60);
   player.addImage(playerImg1);
   player.scale = 0.25;

   sniper = createSprite(400, 400, 20, 40);
   sniper.addImage(sniperImg1);
   sniper.scale = 0.25;


 
}

function draw(){
  if(gameState === PLAY){
      background(ground);

      if(keyDown("Up")){
        player.addImage(playerImg1);
        sniper.addImage(sniperImg1);
        laser.addImage(laser1Img);

        laser.velocityY = -35;
        laser.velocityX = 0;


        if(laser.x = 0){
            laser.x = 400;
        }

        if(laser.x = 800){
            laser.x = 400;
        }

        if(laser.y = 0){
            laser.y = 400;
        }

        if(laser.y = 800){
            laser.y = 400;
        }
      }


      if(keyDown("Down")){
        player.addImage(playerImg2);
        sniper.addImage(sniperImg2);
        laser.addImage(laser2Img);

        laser.velocityY = 35;
        laser.velocityX = 0;

        if(laser.x = 0){
            laser.x = 400;
        }

        if(laser.x = 800){
            laser.x = 400;
        }

        if(laser.y = 0){
            laser.y = 400;
        }

        if(laser.y = 800){
            laser.y = 400;
        }
      }

      if(keyDown("left")){
        player.addImage(playerImg3);
        sniper.addImage(sniperImg3);
        laser.addImage(laser3Img);

        laser.velocityY = 0;
        laser.velocityX = -35;


        if(laser.x = 0){
            laser.x = 400;
        }

        if(laser.x = 800){
            laser.x = 400;
        }

        if(laser.y = 0){
            laser.y = 400;
        }

        if(laser.y = 800){
            laser.y = 400;
        }
      }

      if(keyDown("right")){
        player.addImage(playerImg4);
        sniper.addImage(sniperImg4);
        laser.addImage(laser4Img);

        laser.velocityY = 0;
        laser.velocityX = 35;

        
        if(laser.x = 0){
            laser.x = 400;
        }

        if(laser.x = 800){
            laser.x = 400;
        }

        if(laser.y = 0){
            laser.y = 400;
        }

        if(laser.y = 800){
            laser.y = 400;
        }
  }

}

drawSprites();

}

function zombieRight(){

}

function zombieLeft(){

}

function zombieDown(){

}

function zombieUp(){

}