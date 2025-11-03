// 2D Array Basics 
// Eliz Vo 
// November 3, 2025


// Grid is 5 x 4 in dimension 
let grid = [
  [ 0, 0, 0, 0,  0],
  [ 0, 0,  0, 0, 0],
  [ 0, 0, 0,  0, 0],
  [ 0,  0, 0, 0, 0]
];
let rows = grid.length;
let cols = grid[0].length;

let squareSize = 150;
                                                                                                                                 

function setup() {
  createCanvas(cols * squareSize, rows * squareSize);
}

function draw() {
  background(100);
  renderGrid();
  fill(255);
  print(getCurrentX(), getCurrentY());
}

function mousePressed(){
  // Flip the current tile 
  // Only do this if the mouse is on canvas 
  let x = getCurrentX();
  let y = getCurrentY();

  // ALWAYS: flip the "focus tile"
  flip(x, y);
}

function getCurrentX(){
  // Determine current col of mouse position 
  let constrainedX = constrain(mouseX, 0, width-1);
  return (floor(constrainedX/squareSize));
}

function getCurrentY(){
  // Determine current row of mouse position 
  let constrainedY = constrain(mouseY, 0, height-1);
  return (floor(constrainedY/squareSize));
}

function flip(x, y){
  // Takes a tile at x, y and invert its value 
  if(grid[y][x] === 0){
    grid[y][x] = random(255);
  }
  else{
    grid[y][x] = 0;
  }
}

function renderGrid(){
  // Interpret the information in the 2D array.
  // To draw a grid of squares on the screen to reflect it. 
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*squareSize, y* squareSize, squareSize);
    }
  }
}