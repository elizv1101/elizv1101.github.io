// Nested Loops and Popping Bubbles
// Eliz Vo
// October 3, 2025

let bubbles = [];
let bubbleSize = 15; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  populateArray();
  // drawWithGrid();
}

function populateArray(){
  // Use a nested loop to generate
  // x, y positions for our bubbles.
  for ( let x = 0; x < width; x += bubbleSize){
    for (let y = 0; y < height; y += bubbleSize){
      let b ={
        x: x, y: y
      };
      bubbles.push(b);
    }
  }
}

function showBubbles(){
  // Traverse the array, and display bubble at 
  // each (x, y)
  for (let i = 0; i < bubbles.length; i++){
    let b = bubbles[i];
    fill(100);
    circle(b.x, b.y, bubbleSize);
    // Point-in-circle distance check (pop)
    if(dist(b.x, b.y, mouseX, mouseY) < bubbleSize/2){
      // To delete an item use:  .splice()
      // .splice(position, no. of items to delete, [replacement item])
      bubbles.splice(i, 1);
    }
  }
}

function draw() {
  background(0);
  showBubbles();
}































function drawWithGrid(){
  for( let x = 0; x<= width; x+= 30){
    // x:   0,  30,  60
    for (let y = 0; y <= height; y+= 30){
      // y:   0,  30,  60
      fill(90);
      circle(x, y, 20);
    }
  }
}