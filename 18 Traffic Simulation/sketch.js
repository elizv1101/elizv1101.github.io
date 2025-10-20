// Traffic Simulation
// Eliz Vo
// October 20, 2025
//
// Class for Vehicles: 
// Two types of vehicles  (cars, trucks, semi, motorbike,...)
// Set random on object creation
// xPosition, yPosition, xSpeed
// randomColor for the vehicles
// direction: keep track if it's Westbound or Eastbound

// METHODS:
// move()
// Update position. When reach the edge, wrap around

// display()
// display

// speedUp()
// Increase the speed of the vehicle (to max of 15)

//speedDown()
// Decrease the speed of the vehicle (to min of 0)

//changeColor()
// Update the primary color to new random color

// Action
// Helper function to help call the function internally
// Every frame: move() and display()
// 1% on a given frame: speedUp(), speedDown(), changeColor()


// Function to draw road:
// Two lanes, should be separated by a dashed yellow line
// Westbound (top), Eastbound (bottom)

// Create 2 arrays to hold vehicles 
// let westBound = [];   let Eastbound = [];


let westBound = [];
let eastBound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(65, 50, 35);
  drawRoad();

}

function drawRoad(){
  noStroke();
  fill(32, 32, 32);
  rect(0, height/8, width, height - (height/4));

  for (let x = 0; x <= width; x += 75){
    stroke(255, 255, 51);
    strokeWeight(5);
    rect(x, height/2 -2.5, 30, 5);
  }
}

class Vehicles{
  constructor(x, y, d, t){
    this.x = x;   this.y = y;
    this.speed = random(1 , 5);
    this.color = color(random(255), random(255), random(255));
    this.d = d;
    this.t = t;   
  }

  display(){
    rectMode(CENTER);
    if (this.t === 0){
      fill(this.color);
      rect(this.x, this.y, 50, 100);
    }
    if (this.t !== 0){
      fill(this.color);
      rect(this.x, this. y, 55, 200);
    }
    pop();
  }

  move(){
    if (this.d === 0){
      this.x -= this.speed;
      if(this.x <= 0){
        this. x = width;
      }
    }
    if (this.d === 1){
      this.x += this.speed;
      if (this.x >= width){
        this.x = 0;
      }
    }
  }
}
