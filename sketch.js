var astro;
var brush;
var sleep;
var iss, issImg;
var bath;
var drink;
var eat;
var gym;
var moveLeft, moveRight;
var stillLeft,stillRight;

function preload(){
  issImg = loadImage("iss.png");

  brush = loadAnimation("brush.png");

  sleep = loadAnimation("sleep.png");

  wash = loadAnimation("bath1.png","bath2.png");

  moveLeft = loadAnimation("moveLeft.png");

  stillLeft = loadAnimation("moveLeft.png");

  stillRight = loadAnimation("moveRight.png");

  moveRight = loadAnimation("moveRight.png")
  
  gym = loadAnimation("gym1.png","gym2.png");

  eat = loadAnimation("eat1.png","eat2.png");

  drink = loadAnimation("drink1.png","drink2.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  iss = createSprite(width/2 - 60, height/2, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.39;

  astro = createSprite(width/2, height/2 + 80, 50, 50);
  astro.addAnimation("left",moveLeft);
  astro.addAnimation("right",moveRight);

  astro.addAnimation("sleeping",sleep);
  astro.addAnimation("washing",wash);
  astro.addAnimation("eating",eat);
  astro.addAnimation("gymming",gym);
  astro.addAnimation("drinking",drink);
  astro.addAnimation("brushing",brush);
  astro.scale = 0.2;

  

}

function draw() {
  background("black");  
  
  
  if (keyDown(LEFT_ARROW)) {
    astro.changeAnimation("left",moveLeft);
    astro.velocityX = -3;
  } else if (keyWentUp (LEFT_ARROW)) {
    astro.velocityX = 0;
  }

  if (keyDown(RIGHT_ARROW)) {
    astro.changeAnimation("right",moveRight);
    astro.velocityX = 3;
  } else if (keyWentUp (RIGHT_ARROW)) {
    astro.velocityX = 0;
  }
  
  if (keyDown(UP_ARROW)) {
    astro.velocityY = -2;

  } else if (keyWentUp (UP_ARROW)) {
    astro.velocityY = 0;
  }


  if (keyDown(DOWN_ARROW)) {
    astro.velocityY = 2;

  } else if (keyWentUp (DOWN_ARROW)) {
    astro.velocityY= 0;
  }

  if (keyDown("s")) {
    astro.changeAnimation("sleeping",sleep);
  }

  if (keyDown("e")) {
    astro.changeAnimation("eating",eat);
  }

  if (keyDown("g")) {
    astro.changeAnimation("gymming",gym);
    astro.y = height - 230;
  }

  if (keyDown("d")) {
    astro.changeAnimation("drinking",drink);
  }

  if (keyDown("b")) {
    astro.changeAnimation("brushing",brush);
  }

  if (keyDown("w")) {
    astro.changeAnimation("washing",wash);
  }

  drawSprites();

  if (keyDown("space")) {
    textSize(30);
    fill ("white");
    text ("Use Arrow Keys to Move",width/2 - 190,80);
    text ("S key to sleep",width/2 - 190,110);
    text ("W key to Bath",width/2 - 190,140);
    text ("E key to Eat",width/2 - 190,170);
    text ("B key to Brush Teeth",width/2 - 190,200);
    text ("G key to Gym",width/2 - 190,230);
    text ("D key to drink",width/2 - 190,260);

  }


  textSize(30);
  fill ("white");
  text ("Hold space to see how to play",width/2 - 200,50)



}