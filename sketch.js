var canvas,backgroundImg;
var gameState = 0;
var playerCount ,database;
var form,game,player;
var allPlayers;
var fighter1,fighter2;
var fighter1Img,fighter2Img
;
var fighter1PunchImg,fighter1KickImg;
var fighter2KickImg;
var background;
var healthBar,hbImg,healthBar2,hb2Img,hb2Img2;
var w1,w2,w3,w4;

function preload (){
  fighter1Img = loadAnimation("still.png");
  fighter2Img = loadAnimation("fighter2.png")
  backgroundImg = loadImage("bb.png");
  fighter1PunchImg = loadAnimation("punch0.png","punch1.png","punch2.png","punch3.png","punch4.png","punch5.png","punch6.png");
  fighter1KickImg = loadAnimation("fighterkick1.png","fighterkick2.png","fighterkick3.png","fighterkick4.png","fighterKick5.png");
  fighter2KickImg = loadImage("fighterP2.png","fighterP3.png","fighterP4.png");
  hbImg = loadAnimation("h1.png");
  hb2Img = loadAnimation("h1.png");
  hb2Img2 = loadAnimation("h2.png");
}
function setup(){
  canvas = createCanvas(displayWidth/2+250,displayHeight/2+250);
database = firebase.database();

game = new Game();
game.getState();
game.start();

    fighter1 = createSprite(200,580,20,20);
    fighter1.addAnimation('fighter1',fighter1Img);
    fighter1.scale = 2.5   

    fighter2 = createSprite(800,575,20,20);
    fighter2.addAnimation('fighter1',fighter2Img);
    fighter2.scale = 3.5   
    
    healthBar = createSprite(139,20,20,20);
    healthBar.addAnimation('healthBar',hbImg);
    healthBar.scale=0.8;

    healthBar2 = createSprite(820,20,20,20);
    healthBar2.addAnimation('healthBar2',hb2Img);
    healthBar2.scale=0.8;

    w1 = createSprite(displayHeight/2-450,displayWidth/2-370,3,700);
    w2 = createSprite(displayHeight/2+520,displayWidth/2-360,3,700);
}

function draw(){
  
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
