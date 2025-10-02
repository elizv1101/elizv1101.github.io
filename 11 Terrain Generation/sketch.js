// Terrain Generation
// Eliz Vo
// Sept 29, 2025

let rectWidth;
let count = 0;
let noiseStart = 0;
let noiseValue;
let noiseSpeed = 0.01;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = 5;
}

function generateTerrain(){
  // Use a loop to generate and draw several
  // rectangles side to side to look like 2D 
  // terrain.
  rectMode(CORNERS);
  noiseValue = noiseStart;
  for(let x = 0; x < width; x+=rectWidth){
    // generate a random height.
    // NOTE!! change this from random() to noise()
    noiseValue += noiseSpeed;
    let rectHeight = noise(count);   //random(50, 500);
    rectHeight = map(noise(noiseValue), 0, 1, 0, height);
    // calculate the upper-right corner of rect
    count += 0.01;
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    color(184, 46, 46);
    rect(x, height, x2, y2);
  }
  rectMode(CORNER);  //revert to default
}

// function drawFlag(){
//   let highestPeak = 0;
//   let hightestX;
//   let highestY;
//   for (let i = 0; i < 0; i++){
//     if (rectHeight > highestPeak){
//       highestPeak = rectHeight;
//       highestX = x2;
//       highestY = y2;
//     }
//   }
// }


function draw() {
  background(0);
  noiseValue = noiseStart;
  noiseValue += noiseSpeed;

  stroke(148, 8, 8),
  fill(148, 8, 8);
  generateTerrain();
  noiseStart+= 0.00989;



  for (i = 1; i > 2; i-=1){
    if (keyIsPressed(RIGHT_ARROW)){
      rectWidth += 0.5;
    }
    else if (keyIsPressed(LEFT_ARROW)){
      rectWidth -= 0.5;
    }
  }

}
