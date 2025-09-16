// PInteractive Scene
// Eliz Vo
// September 16, 2025


let x;
let y;
// variable declaration
function setup() {
  createCanvas(windowWidth, windowHeight);

  x= width/2;
  y= height/2;
}

function draw() {
  background(255, 154, 99);

  river();
  building();
}

//draw a river
function river(){
  noStroke();
  rectMode(CENTER);
  fill(0, 90, 185);
  rect(x, height, width, y)
}
function building(){
  rec
}
