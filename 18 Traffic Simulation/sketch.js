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
let myVehicles;
let myTrafficLight;

function setup() {
  createCanvas(windowWidth, windowHeight);

  myTrafficLight = new TrafficLight();
  for (let i = 0; i <= 20; i ++){
    eastBound.push(new Vehicles(0, random(height/6, 
      height/2 - 20), 1, random(0,1)));
  }
  for (let i = 0; i <= 20; i ++){
    westBound.push(new Vehicles(0, random(height/2 + 20, 
      height - (height/ 7), ), 0, random(0,1)));
  }
}

function draw() {
  background(65, 50, 35);
  drawRoad();
  for (let e of eastBound){
    e.action();
   }
   for (let w of westBound){
    w.action();

    myTrafficLight.display();
  }
}

function mousePressed(){
  if (mouseButton === LEFT){
    if (mouseIsPressed && keyCode !== SHIFT){
      print("add eastbound");
      eastBound.push(new Vehicles(0, random(height/6, 
        height/2 - 20), 1, random(0,1)));
    };
    if (keyCode === SHIFT && keyIsPressed && mouseIsPressed){
      print("add westbound");
      westBound.push(new Vehicles(0, random(height/2 + 20, 
        height - (height/ 7), ), 0, random(0,1)));
    }
}
}

function drawRoad(){
  stroke(230);
  fill(32, 32, 32);
  rectMode(CORNER);
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
    strokeWeight(0.1);
    if (this.t <= 0.5){    // Car
      fill(this.color);
      rect(this.x, this.y, 30, 15);


      noStroke();
      fill(230);
      rect(this.x - 7 , this. y + 10, 4, 2);
      rect(this.x - 7 , this. y - 10, 4, 2);
      rect(this.x + 7 , this. y + 10, 4, 2);
      rect(this.x + 7 , this. y - 10, 4, 2);
    }
    if (this.t > 0.5){   // Truck
      fill(this.color);
      rect(this.x, this. y, 50, 25);
      
      fill(230);
      noStroke();
      rect(this.x + 15, this. y, 2, 24.5);
    }
  }

  move(){
    if (myTrafficLight.light === 0){
      if (this.d === 0){         // Eastbound
        this.x += this.speed;
        if(this.x >= width){
          this. x =0;
        }
      }
      if (this.d === 1){         // Westbound
        this.x -= this.speed;
        if (this.x <= 0){
          this.x = width;
        }
      }
    }
    else if (myTrafficLight.light = 2){ 
      if (this.d === 0){         // Eastbound
        this.x += this.speed/1.1;
        if(this.x >= width){
          this. x =0;
        }
      }
      if (this.d === 1){         // Westbound
        this.x -= this.speed/1.1;
        if (this.x <= 0){
          this.x = width;
        }
      } 
    }
  }

  speedUp(){
    if (this.speed <= 15){
      this.speed += 0.5
    }
  }

  speedDown(){
    if (this.speed >= 1){
      this.speed -= 0.5
    }
  }

  changeColor(){
    this.color = color(random(255), random(255), random(255));
    fill(this.color);
  }

  action(){
    this.move();
    this.display();

    if (random(1)<0.01){
      this.speedUp();
    }
    if (random(1)< 0.01){
      this.speedDown();
    }
    if (random(1)< 0.01){
      this.changeColor();
    }
  }
}

class TrafficLight{
  constructor(){
    this.light = 0;
    this.c = color(50,255,90);
  }

  display(){
    stroke(0,0,0);
    strokeWeight(2);
    if (keyCode === ENTER && keyIsPressed){
      for (let frameCount = 0; frameCount <= 120; frameCount++){
        this.c = color(255, 10, 15);
        this.light = 1;
      }
    }
    else if (keyCode === BACKSPACE && keyIsPressed){
      for (let frameCount = 0; frameCount <= 120; frameCount++){
        this.c = color(230, 200, 20);
        this.light = 2;
      }
    }
    else{
      this.c = color(50,255,90);
      this.light = 0;
    }
    fill(this.c);
    circle(width/2, height/16, 90);
  }
}