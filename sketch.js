var s;
var scl = 20;
var food;
var left,right,up,down ;




function setup() {
  //createCanvas(1200, 600);
  createCanvas(windowWidth-25 ,windowHeight-100 );
  s = new Snake();
  frameRate(10);
  grid();
  

  left = createSprite(width/2-50,height,20,20);
  //right=createSprite();
  //up=createSprite();
  //down=createSprite();


}




function grid() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}






function draw() {
  background(248, 220, 129);




  if (s.eat(food)) {
    grid();
  }

  s.death();
  s.update();
  s.show();
  fill(0, 145, 124);
  rect(food.x, food.y, scl, scl);

drawSprites();
}









function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}


