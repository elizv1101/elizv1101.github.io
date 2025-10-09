// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let originalSpacing = 20;
let d = new Date();


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

function draw() {
  background(255);
  drawBasicGrid(220);
  push();
  translate(width/2, height/2);
  circle(0, 0, 150);
  fill(0,0,0);
  for (let i = 0; i <= 12; i++){
    strokeWeight(3);
    line(0,55, 0, 70);
    rotate(30);
  }
  for (let i = 0; i <= 72; i ++){
    strokeWeight(0.5);
    line(0, 65 , 0, 70 )
    rotate(5);
  }
  
  rotate(frameCount);
  strokeWeight(2);
  line(0, 0 , 0, 65);
  

  pop();
}

function face(x, y) {
  // Draw a face at x,y
  push();
  translate(x,y);
  ellipseMode(CENTER);
  fill(200,200,0);
  stroke(0);
  ellipse(0,0,80,80);
  fill(90, 140, 30, 220);
  triangle(-20, 20, 20, 20, 0, 30);
  fill(0);
  ellipse(-25,0,10,10);
  ellipse(25,0,10,10);
  strokeWeight(5);
  line(-30,-10,30,-10);
  strokeWeight(1);
  pop();
}

function rectangleRed(x, y) {
  // Draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  // When different basic transformations are applied.
  noStroke();
  fill(255, 0, 0, 150);
  rect(x, y, 50, 50);

}

function rectangleBlue(x, y) {
  // Draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  // When different basic transformations are applied.
  noStroke();
  fill(0, 0, 255, 150);
  rect(x, y, 50, 50);

}

function drawBasicGrid(shade) {
  // Draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += 20) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 20) {
    line(0, y, width, y);
  }

  // Draw "X" at the origin
  strokeWeight(3);
  stroke(0);
  line(-5,0,5,0);
  line(0,5,0,-5);
  strokeWeight(1);
}