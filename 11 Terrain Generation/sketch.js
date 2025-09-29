// Terrain Generation 
// Eliz Vo
// September 29, 2025

let rectWidth = 5;
let noiseStart = 0; 
let noiseValue;
let noiseSpeed = 0.002;
let minHeight = 30;
let maxHeight = 500; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  // for now generate the terrain once
  generateTerrain();
}

function generateTerrain(){
  let rectNumber = windowWidth/ rectWidth;
  // Use a loop to generate and draw several
  // rectangles side to side to look like 2D terrain
  rectMode(CORNERS);
  // if (keyCode === RIGHT_ARROW && keyIsPressed){
  //   rectWidth += 1;
  // }
  // else if(keyCode === LEFT_ARROW && keyIsPressed){
  //   rectWidth -= 1;
  // }
  for (let x = 0; x< width; x+= rectWidth){
    if (keyCode === RIGHT_ARROW && keyIsPressed){
      rectWidth += 1;
    }
    else if(keyCode === LEFT_ARROW && keyIsPressed){
      rectWidth -= 1;
    }
    // Generate random height
    // NOTE: change this from random() to noise()
    let rectHeight= random(50, 500);

    // Calculate the upper-right corner of rect
    let x2= x+ rectWidth;
    let y2 = height - rectHeight;
    
    // Draw rect
    rect(x, height, x2, y2)

  }

  rectMode(CORNER);
}

function draw() {
  // background(220);
}
