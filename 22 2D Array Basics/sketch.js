// 2D Array Basics 
// Eliz Vo 
// November 3, 2025

// Grid is 7 x 7 in dimension 
let grid = [
  [], 
  [], 
  [], 
  [], 
  [], 
  [] , 
  [], 
  [], 
  [], 
  []
];

let rows = 10;
let cols = 10;

let squareSize = 80;

function setup() {
  createCanvas(cols*squareSize, rows*squareSize);
  createGrid();
}

function draw() {
  background(220);
  renderGrid();
  // colorOverlay();

  // If winCheck() === true,
  // display the "You Win" text on the screen
  if (winCheck() === true){
    textSize(40);        
    textAlign(CENTER, CENTER);
    fill(255, 40, 60);
    strokeWeight(2);
    text("You Win", width/2, height/2);
  }
}

// Function to create random grid
function createGrid(){
  for (let y = 0; y< rows; y++){
    for (let x = 0; x< cols; x++){
      // Choose a random number between 0 and 1
      let n = random(0,1);
      // if the number is lower than or equal to 0.5
      // the color of that tile is black.
      if(n <= 0.5){
        grid[y][x] = 0;
      }
      // else the tile will be white.
      else{
        grid[y][x] = 255;
      }
    }
  }
}

function mousePressed(){
  //flip current tile
  //upgrade: only do this if the mouse is on Canvas
  
  let x = getCurrentX();
  let y = getCurrentY();

  //ALWAYS: flip the "focused" tile
  if( mousePressed && keyCode === SHIFT && keyIsPressed){
    flip(x,y);
  }
  else{
  //IF THEY EXIST:
  //flip our NSEW neighbours (cross pattern)
    flip(x, y);
    if(x+1 < cols) flip(x+1,y);
    if(y-1 >= 0) flip(x, y-1);
    if(x-1 < cols) flip(x-1,y);
    if(y+1 >= 0) flip(x, y+1);
  }
}

function getCurrentX(){
  //determine current col of mouse position
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX / squareSize);
}

function getCurrentY(){
  //determine current row of mouse position
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY / squareSize);
}


function flip(x,y){
  //takes a tile @ x,y and inverts its value
  if(grid[y][x] === 0){
    grid[y][x] = 255;
  }

  else{
    grid[y][x] = 0;
  }
}

function renderGrid(){
  // interpret the information in the 2D array, and draw
  // a grid of square on the screen to reflect it.
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*squareSize,y*squareSize,squareSize);
    }
  }
}

function winCheck(){
  // Create a variable called count
  let count = 0;
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      // If the color of the tile checked is black 
      // count plus 1
      if (grid[y][x] === 0){
        count++;
      }
      // If the color of the tile checked is white
      // count minus 1
      else if (grid[y][x] === 255){
        count--;
      }
    }
  }
  // If count = the number of tiles, or count = -(number of tiles)
  // Return true
  if (count === rows * cols || count === -(rows * cols)){
    return true;
  }
}


function colorOverlay(){
  let x = getCurrentX();
  let y = getCurrentY();

  grid[y][x] = color(200, 50, 20);
  grid[y+1][x] = color(200, 50, 20);
  grid[y-1][x] = color(200, 50, 20);
  grid[y][x+1] = color(200, 50, 20);
  grid[y][x-1] = color(200, 50, 20);

}