// User Events - Day 1 Challenge
// Eliz Vo
// September 11, 2025

// GLOBAL VARIABLE 

// can only work with "simple" data in this 
// section of code
// available until in setup(),...after canvas is made
let circleColor = false;
let currentColor="crimson";

let x; let y = 300;  
let tSize = 50
// declaration initialization

function setup() {
  createCanvas(400, 400);
  x= width/2;
}

function draw() {
  background(220);
  challenge(); //coordinate system challenge

  rect(x- 30, y, 60,30);
  movement();
  mouseReport();
}

function movement(){
  // check for keyboard pressed each framed
  // and move the rectangle accordingly
  if (keyCode=== LEFT_ARROW && keyIsPressed){
    x-=5;
  }
  if (keyCode === RIGHT_ARROW && keyIsPressed){
    x+=5;
  }
 
  if (keyIsDown(UP_ARROW)){
    y-=5
  }
  if (keyIsDown(DOWN_ARROW)){
    y+=5
  }
}
function keyPressed(){
  // this is a special EVENT function, gets
  // activated anytime a keyboard button is pressed.
  print("Key was pressed!");

  if (key==="g"){
    currentColor = "indigo";
  }
  else if(keyCode === SHIFT){
    currentColor="deeppink";
  }
  circleColor = !circleColor;
}
function challenge(){
  // draw 5 hollow circles
  // center position
  noFill();

  if (circleColor){ // circleColor === true 
    fill(currentColor);
  }
  // 5 circles 

  circle(width/2, height/2, 50); // middle
  circle(0, 0, 50); // top left
  circle(width, height,50); // bottom right
  circle(0, height,50); // bottom left
  circle(width, 0,50); // top right

}

function mouseReport(){
  // inspect some of the built-ins (system variables)
  //for working with the mouse
  fill(0);
  let src = mouseX +", "+ mouseY +", " + mouseIsPressed;
  textSize(tSize);
  text(src, mouseX, mouseY);
}

function mousePressed(){
  tSize = random(10,80);
}