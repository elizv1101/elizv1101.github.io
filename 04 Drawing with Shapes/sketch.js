// Drawing with Shapes
// Eliz Vo
// September 15, 2025

let headSize = 300;
let x;
let y;
function setup() {
  createCanvas(windowWidth, windowHeight);
  x= width/2;
  y= height/2;
}

function draw() {
  background(30);

  alien();
  movement();
}

function alien(){
  fill(138, 0, 25)
  circle(x,y,headSize);
  stroke(138, 0, 25);
  stroke(138, 0, 25);
  fill(138, 0, 25);
  rect(x-(headSize/2), y, headSize, headSize/2);
  rect(x+(headSize/2)-(headSize/8), y+ (headSize/2), headSize/8, headSize/3 ); //right leg
  rect(x-(headSize/2), y+ (headSize/2), headSize/8, headSize/3); //left leg
  fill(0, 0, 0);
  circle(x -(headSize/4), y, headSize/10); //left eye
  circle(x +(headSize/4), y, headSize/10); //left eye
  rect(x-(headSize/6), y+(headSize/6), headSize/3, headSize/15); //mouth
}

function movement(){
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



