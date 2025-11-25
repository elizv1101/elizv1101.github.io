// Recursive Imagery
// Eliz Vo 
// November 25, 2025 



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function setFill(x, y, s){
  if (dist(mouseX, mouseY , x, y) < s/2){
    fill(222, 22, 32);
  }
}

function centerCircle(x, y, d) {
  // Recursively draw concentric circles
  // Base case implicit 
  if (d > 10){
    // Recurive case 
    circle(x, y, d);
    centerCircle( x, y, d* 0.99);
  }
  // If we skip the recirsove case, we 
  // unravel one level
}

function circleFractal(x, y, d){
  if (d > 3){
    circle(x, y, d);
    circleFractal(x- d/2, y, d/2);
    circleFractal(x+ d/2, y, d/2);
    circleFractal(x, y- d/2, d/2);
    circleFractal(x, y+ d/2, d/2);
  }
  else{
    noFill();
  }
}

function luckySquare(x, y, s){
  if (s > 3){
    push();
    translate (x, y);
    rotate(radians(frameCount));
    setFill(x, y, s);
    square(0, 0, s);
    pop();
    luckySquare(x - s/2, y - s/2, s*0.42);
    luckySquare(x - s/2, y + s/2, s*0.42);
    luckySquare(x + s/2, y - s/2, s*0.42);
    luckySquare(x + s/2, y + s/2, s*0.42);
    
  }
}

function draw() {
  rectMode(CENTER);
  background(255);
  stroke(255, 50, 50);
  noFill();
  // centerCircle(width/2, height/2, width)
  // circleFractal(width/2, height/2, width/2);
  luckySquare(width/2, height/2, width/2)
}
