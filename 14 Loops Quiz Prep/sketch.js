// Loops Quiz Prep
// Eliz Vo
// October 6, 2025

let gridSize = 40; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function grid(){
  // Draw a grid or something
  // color(136, 23, 30);
  strokeWeight(30);
  let x = 0;  let y = 0;
  while ( x < width ){  // x : 0,   40,   80, ...
    while ( y < height){
      if (abs(width/2 - x) > 100){
        y += gridSize;  
      }
      point(x, y);
      
    }

    x += gridSize;
  }

}

function draw() {
  background(244, 156, 187);
  grid();
}
