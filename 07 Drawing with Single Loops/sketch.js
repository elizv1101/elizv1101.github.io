// Drawing with Single Loops
// Eliz Vo
// September 23, 2025


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  gradientBackground();
  circleLine(height*0.65, 100);
  circleLine(height/2,  40);
  circleLine(height*0.35, 100);
}

function gradientBackground(){
  // Creat a gradient to use as background
  let h = 3; // height of each rectangle

  // Use a loop (doesn't have to be WHILE)
  // draw a vertical stack of rectangles 
  let y = 0;
  while(y<=height){
    noStroke();
    let mappedY =map(y, 0, height, 0, 255);
    let flippedY = 255- mappedY;
    let mappedMouseX= (MouseX, 0, width, 0, 255);
    let mappedMouseY= (MouseY, 0, height, 0, 255);
    fill(mappedMouseY, flippedY, mappedMouseX);
    rect(0, y, width, h);
    y+=h;
  }

}

function cDistance(x1, y1, x2, y2){
  // Calculate the straightline distance
  // between (x1, y1) and (x2, y2)
  let a = abs(x1-x2);
  let b = abs(y1-y2);  // c =sqrt(a^2 + b^2)
  let c = sqrt(pow(a, 2) + pow(b, 2));
  return c.toFixed (1) // keep only one decimal place
}


function circleLine(y, size){
  // Use this function to draw a line of 
  // circles. (loops)
  // y -> number the height at which to draw the line
  // size -> number diameter of the circles 

  let xStart= width*0.1 // 10% position to the left
  let xEnd= width*0.9 // 90% horicontal position from left 

  for (let x= xStart; x <= xEnd; x += size ){
    let d =cDistance (x, y, mouseX, mouseY);
    if (d<= size/ 2){
      fill(255, 255, 255);
    }
    textAlign(CENTER, CENTER);
    fill(203, 40, 67);
    circle(x, y, size);
    text(d, x, y);
  }
}

