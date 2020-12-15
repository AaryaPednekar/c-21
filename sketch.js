var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(200,600,50,50);
  car.shapeColor = "blue";
  car.velocityX = 8;
  wall = createSprite(1000,600,30,80);
  wall.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,wall)){
   text("touching",300,200);
  }
  if(isTouching(wall,car)){
    car.shapeColor = "pink";
  }
  bounceOff(car,wall);

  drawSprites();
}

