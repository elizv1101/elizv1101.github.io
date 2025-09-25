// Random of Noice 
// Eliz Vo
// September 24, 2025

let x1, y1, x2, y2;
let d1, d2;
let noiseTime = 5; let noiseSpeed = 0.1;
// "noiseSpeed" controls how connected 
// our randoms circles are 
let minSize = 5; let maxSize = 200; 
let mX, mY // Move x and y

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width*0.3;
  y1 = height*0.5;
  x2 = width*0.7;
  y2 = height*0.5;
  mY= height*0.3;
  //frameRate(10);
}

function draw() {
  background(0);
  randomCircle();
  noiseCircle();
}

function noiseCircle(){
  // Draw a fixed circle with randomly 
  // changing (but smooth) diameters
  noStroke() 
  fill(229, 56, 136);
  d2 = noise(noiseTime);
  d2 = map(d2, 0, 1, minSize, maxSize)
  circle(x2, y2, d2);
  noiseTime += noiseSpeed;
}

function randomCircle(){
  // Draw circles with randomly changed diameter]
  noStroke();
  fill(172, 23, 84);
  d1 = random(minSize, maxSize);
  circle(x1, y1, d1);
}

function noiseMove(){
  
}