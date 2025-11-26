// Growing Trees
// Eliz Vo
// November 26, 2025


let angle = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  angle = map(mouseX, 0, width, 0, 100);
  translate(width/2, height);
  branch(250)
}


function branch(len){
  stroke(0, 0, 0);
  if ( len < 30){
    stroke(30, 200, 20);
  }
  let t = map(len, 2, 250, 1, 20);
  strokeWeight(t);

  line(0, 0, 0, -len);
  translate(0, -len);
  
  if (len > 2){ // Recursive case
    push();
    rotate(angle); 
    branch(len*0.6);
    pop();

    push();
    rotate(-angle);
    branch(len* 0.6);
    pop();
  }
}