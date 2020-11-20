
var fixedrect;
var movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200,200,50,70);
  fixedrect.debug = "true";
  fixedrect.shapeColor = "green";
  movingrect = createSprite(400,150,70,50);
  movingrect.shapeColor = "green";
  movingrect.debug = "true";
}

function draw() {
  background(255,255,255);  
  if ( movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
        fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 &&
        movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
        fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2 ) {
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";
  }
  else {
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";
  }
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  drawSprites();
}