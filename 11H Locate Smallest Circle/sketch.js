// Locate Smallest Circle
// Eliz Vo
// October 1, 2025

let NUM_CIRCLES = 40;
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //drawCircles();
  seed = random(0, 100);
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();
}

function drawCircles(){
  // Draw some random circles 
  noFill();
  let smallestDiameter = Infinity;
  let smallestX;
  let smallestY;
  for(let i = 0; i < NUM_CIRCLES; i++){
    let x = random(0, width);
    let y = random(0, height);
    let d = random (20, 100);

    if( d < smallestDiameter){
      smallestDiameter = d;
      smallestX = x;
      smallestY = y;
    }
    circle(x,y,d);
  }

  fill(228, 127, 181);
  circle(smallestX, smallestY, smallestDiameter);
}