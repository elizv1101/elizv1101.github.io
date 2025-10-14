// Object Mini Demo
// Eliz Vo
// October 10, 2025

// Global Variables --- Can only store simple data
// Cannot store Class data 
let myBall;
let ballCollection = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  myBall = new Ball(100,100);
}

function draw(){
  background(0);
  // Process SINGLE ball object 
  myBall.move();
  myBall.display();

  // Add new objects to array
  if (mouseIsPressed){
    ballCollection.push(new Ball(mouseX, mouseY));
  }

  // Process COLLECTION of objects 
  for (let b of ballCollection){
    b.move();
    b.display();
  }
}

class Ball {
  // 1. Constructor
  constructor(x, y){
    this.x = x;   this.y = y;
    this.c = color(random(255), random(255), random(255));
    this.size = 15; 
    this.speed = random(2, 10);
  }

  // 2. Class Methods/ Functions
  display(){
    fill(this.c);
    circle(this.x, this.y, this.size);
  }

  move(){
    // Horizontal movement only
    this.x += this.speed;
    if(this.x > width){
      this.x = 0;
    }
  }
}