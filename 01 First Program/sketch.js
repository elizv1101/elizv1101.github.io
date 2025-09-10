// Coordinate Systems and User Events
// Eliz Vo
// September 10, 2025


function setup() {
  createCanvas(windowWidth, windowHeight);
  print(windowWidth, windowHeight, width, height);
  //windowWidth: current browse width
  //width:       canvas width
}

function draw() { // runs over and over 
                  // targeting 60 frames per second
  background("crimson"); //draws a big solid rectangle
                   // 0 - black, 255 - white
  // STRIVE to keep draw() clean and tidy
  //fill(0, 0, 0);
  //    R, B, G
  //circle(mouseX, mouseY, 30);
  drawTwoCircles() 
}

function drawTwoCircles(){  //[ALT] + [SHIFT] + [F] = Autoformat
  // draws 2 circles, one at a fixed location
  // and one at the mouse location

  // draw order: the latter the drawing, the higher it is in the draw stack
  fill(0, 0, 0);
  circle(mouseX, mouseY, 100);

  fill(0, 0, 0)
  circle(width/2, height/2, 100)
}



