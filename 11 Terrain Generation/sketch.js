// Terrain Generation
// Eliz Vo
// Sept 29, 2025

let rectWidth;
let count = 0;
let noiseStart = 0;
let noiseValue;
let noiseSpeed = 0.01;
let avrHeight;
let num;
let sumHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = 5;
  sumHeight = 0;
  num = 0; 
  for (i = 1; i > 2; i -= 1) {
    if (keyIsDown(RIGHT_ARROW)) {
      rectWidth += 0.5;
    }
    else if (keyIsDown(LEFT_ARROW) && rectWidth >= 3) {
      rectWidth -= 0.5;
    }
  }
}

function generateTerrain() {
  // Use a loop to generate and draw several
  // rectangles side to side to look like 2D 
  // terrain.
  sumHeight = 0;
  rectMode(CORNERS);
  noiseValue = noiseStart;

  // Added part ot the function to determine the
  // highest rectangles
  // To place a flag on it.
  let highestY = Infinity;
  let highestX;
  for (let x = 0; x < width; x += rectWidth) {
    
    // Panning 
    noiseValue += noiseSpeed;
    let rectHeight = noise(count);   //random(50, 500);
    rectHeight = map(noise(noiseValue), 0, 1, 0, height);
    // calculate the upper-right corner of rect
    count += 0.01;
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;
    if (y2 < highestY) {
      highestX = x2;
      highestY = y2;
    }
    color(184, 46, 46);
    rect(x, height, x2, y2);
    // Count the number of rectangles on the screen
    // Calculate the average height of the rectangles
    // appear on the screen.
    num = width/ rectWidth;
    sumHeight += y2 ;
  }
  avrHeight = sumHeight/ num;
  drawFlag(highestX, highestY);
  rectMode(CORNER);  //revert to default
}
// Function to draw flag 
function drawFlag(x, y) {
  stroke(255, 255, 255);
  fill(255, 255, 255);
  line(x, y, x, y - 30);
  triangle(x, y - 15, x + 15, y - 22.5, x, y - 30);
}

// Function to indicate the average height 
// draw a bar/ rectangle on the screen.
function averageHeightIndicator() {
  fill(200, 200, 200);
  noStroke();
  rect(0, avrHeight, width, 20);
}

function draw() {
  background(0);
  noiseValue = noiseStart;
  noiseValue += noiseSpeed;

  stroke(148, 8, 8),
    fill(148, 8, 8);
  generateTerrain();
  noiseStart += 0.00989;
  averageHeightIndicator();
}
