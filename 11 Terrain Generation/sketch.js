// Terrain Generation
// Eliz Vo
// Sept 29, 2025

let rectWidth;
let count = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = 5;
  generateTerrain();
}

function generateTerrain(){
  // Use a loop to generate and draw several
  // rectangles side to side to look like 2D 
  // terrain.
  rectMode(CORNERS);

  for(let x = 0; x < width; x+=rectWidth){
    // generate a random height.
    // NOTE!! change this from random() to noise()
    let rectHeight = noise(count);   //random(50, 500);
    rectHeight = map(rectHeight, 0, 1, 0, height);
    // calculate the upper-right corner of rect
    count += 0.01;
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    rect(x, height, x2, y2);
  }
  rectMode(CORNER);  //revert to default
}

// for (let i = 1; i < 2; i-=1){
//   if(keyCode === RIGHT_ARROW && keyIsPressed){
//     rectWidth += 2;
//   }
//   else if(keyCode === LEFT_ARROW && keyIsPressed){
//     rectWidth -= 2;
//   }
// }


function draw() {
  // background(220);
}
