var thief, thiefAnimation, 
bgImg, groundImg, ground;
var stone , stoneImg;
var tree, treeImg;
var invisibleGround;
var Play = 1;
var End =0;
var gamestate = Play;
var score=0;
var thiefAnimation2
var gameOver;





function preload(){
  thiefAnimation = loadAnimation("images/run2.png","images/run4.png",);
  bgImg = loadImage("images/bg.jpg")
groundImg= loadImage("images/ground.png")
stoneImg= loadImage("images/stone.png")
treeImg =  loadImage("images/tree.png")
thiefAnimation2 = loadAnimation("images/run2.png");
gameOverImg = loadImage("images/gameOver.png")

}

function setup() {
  createCanvas(1600,787);

thief = createSprite(150,520,20,20)
thief.addAnimation("thief",thiefAnimation);
thief.scale = 0.6


ground = createSprite(800,700,160,160)
ground.addImage(groundImg)
ground.scale=2

invisibleGround = createSprite(800,690,2000,10);
invisibleGround.visible = false;

gameOver = createSprite(100,100,100,100)
gameOver.addImage(gameOverImg)
}

function draw() {
  background(bgImg);  






if(gamestate===Play){

      gameOver.visible=false;
//SCORE
      textSize(40);
      fill(rgb(265,265,265)) 
      textFont("BLACKACDER ITC");
      text("Score = "+score,1300,100);
  
//score = score + Math.round(getFrameRate()/100)
        score = score+1

//key code
    if((keyIsDown(UP_ARROW))&& (thief.y>450)){
        thief.velocityY=-26
        thief.changeAnimation("thief2",thiefAnimation2);
      }
    thief.velocityY = thief.velocityY+2;
    thief.collide(invisibleGround)

      Trees();
      Stone();




}











//gamestate end
if(gamestate===End){
gameOver.visible = true;
}




  drawSprites();
}

function Stone(){
  if(frameCount%170===0){
    stone = createSprite(1609,630,10,10)
    stone.addImage(stoneImg);
    stone.scale=0.15
    stone.velocityX = -3
    stone.lifetime=500;
   stone.debug = true;
  }
}

function Trees(){
  if(frameCount%300===0){
    tree = createSprite(1600,560,10,10)
    tree.addImage(treeImg);
    tree.scale=0.2
    tree.velocityX = -3
    tree.lifetime=500;
  tree.debug = true;
  }
}

