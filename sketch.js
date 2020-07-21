var ball,img,paddle;
function preload() {
  
  ballimage = loadImage("ball.png");
  paddleimage = loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(100,200);
  ball.addImage(ballimage);
  
  paddle = createSprite(300,200);
  paddle.addImage(paddleimage);
  
}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  
ball.bounceOff(edges[0]);
ball.bounceOff(edges[2]);
ball.bounceOff(edges[3]);

ball.bounceOff(paddle);


 
paddle.collide(edges[2]);
paddle.collide(edges[3]); 
  
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y - 6
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.y = paddle.y + 6 
  }
  
  randomVelocity();
  
  
  drawSprites();
}

function randomVelocity()
{
 if(keyDown("Space")){
   ball.velocityX = random(-9,9);
}
}
