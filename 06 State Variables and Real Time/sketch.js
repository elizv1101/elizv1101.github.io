// State Variables and Real Time
// Eliz Vo
// September 18, 2025

//Global Variables
let shapeState =0; //0 - Circle, 1- Square. 2- Triangle, 3- Transition
let startTime, elapsedTime;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawShape();
  manageTimer();
  if(shapeState===3 && elapsedTime>2000){
    shapeState= 0;
  }
}


function drawShape(){
  // Inspect the variable and draw the shape 
  // according to the value of the variable.
  switch(shapeState){
    case 0:
      circle(width/2, height/2, 150);
      break;
    case 1:
      square(width/2, height/2, 150);
      break;
    case 2:
      let x = width/2; y = height/2;
      triangle(x-50, y-50, x+50, y+50, x, y-25);
      break;
    case 3:
      for ( let i =0; i<20; i++){
        let x = random(width*0.4, width*0.6);
        let y = random(height*0.4, height*0.6);
        line(x,y,x+25,y);
      }      
    }
  }

function manageTimer(){
  // Update elapsedTime and Display
  elapsedTime = millis()- startTime;
  text((elapsedTime/1000).toFixed(2), width*0.3, height*0.75);
}



function keyPressed(){
  // Automatically called on any keyboard button press
  // state variable: 0 -> 1    1->2
  //                 2 -> 3   (for 2 seconds) -> 0
  if (shapeState<3){
    shapeState++;
    if (shapeState ===3){
      startTime = millis();
    }
  }
}
