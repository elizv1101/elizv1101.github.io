// Traffic Simulation
// Eliz Vo
// October 20, 2025


// GLOBAL VARIABLES
let westBound = [];
let eastBound = [];
let myVehicles;
let myTrafficLight;


function setup() {
  createCanvas(windowWidth, windowHeight);

  // Loop to create 20 vehicles on both sides
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


// Function to add vehicles on both sides
// SHIFT + LEFT CLICK to add car on Westbound 
// LEFT CLICK too add car on Eastbound
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

// Function to draw road
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

    // Draw a car with 4 wheels 
    if (this.t <= 0.5){    
      fill(this.color);
      rect(this.x, this.y, 30, 15);


      noStroke();
      fill(230);
      rect(this.x - 7 , this. y + 10, 4, 2);
      rect(this.x - 7 , this. y - 10, 4, 2);
      rect(this.x + 7 , this. y + 10, 4, 2);
      rect(this.x + 7 , this. y - 10, 4, 2);
    }

    // Draw a truck with a line to distinct the head of the truck
    if (this.t > 0.5){   
      fill(this.color);
      rect(this.x, this. y, 50, 25);
      
      fill(230);
      noStroke();
      rect(this.x + 15, this. y, 2, 24.5);
    }
  }

  // Make the movements to match the traffic light
  move(){

    // myTrafficLight.light === 0 (GREEN LIGHT)
    if (myTrafficLight.light === 0){

      // this.d === 0 (EASTBOUND)
      if (this.d === 0){    
        this.x += this.speed;  
        if(this.x >= width){
          this. x =0;
        }
      }

      // this.d === 1 (WESTBOUND)
      else if (this.d === 1){         
        this.x -= this.speed;
        if (this.x <= 0){
          this.x = width;
        }
      }
    }

    // 
    else if (myTrafficLight.light === 2){ 
      if (this.d === 0){   
        // Eastbound
        this.x += this.speed/this.speed;
        if(this.x >= width){
          this. x =0;
        }
      }
      else if (this.d === 1){         // Westbound
        this.x -= this.speed/this.speed;
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