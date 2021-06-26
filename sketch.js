
var fixedRect,fixedRect2, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug=true

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug =true

  fixedRect2 = createSprite(400, 500, 50, 50);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug =true

  fixedRect3 = createSprite(400, 350, 50, 50);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug =true
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  
  else if(isTouching(movingRect,fixedRect2)) {
    movingRect.shapeColor = "red";
    fixedRect2.shapeColor = "red"
  }
  else if(isTouching(movingRect,fixedRect3)) {
    movingRect.shapeColor = "red";
    fixedRect3.shapeColor = "red"
  }
     else{
      movingRect.shapeColor = "green"
      fixedRect .shapeColor = "green"
      fixedRect2.shapeColor = "green"
      fixedRect3.shapeColor = "green"
     }
 
    
      
  
//bounceOff(movingRect,fixedRect)
  drawSprites();
}




