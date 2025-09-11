// User Events - Day 1 Challenge
// Eliz Vo
// September 11, 2025

// GLOBAL VARIABLE 
let circleColor = false;
// 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  challenge(); //coordinate system challenge
}

function keyPressed(){
  // this is a special EVENT function, gets
  // activated anytime a keyboard button is pressed.
  print("Key was pressed!");
  circleColor = !circleColor
  // how to tell which key was pressed?
}
function challenge(){
  // draw 5 hollow circles
  // center position
  noFill();

  if (circleColor){ // circleColor === true 
    fill(255,0,0);
  }
  // 5 circles 

  circle(width/2, height/2, 50); // middle
  circle(0, 0, 50); // top left
  circle(width, height, 50); // bottom right
  circle(0, height, 50); // bottom left
  circle(width, 0, 50); // top right
}
