// Create Your First Class Challenge 
// Eliz Vo
// OCtober 14, 2025

let myRoundRacer;
let xPosition;
let yPosition;
let racerCollection =[];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(30);
  myRoundRacer = new RoundRacer(100, 255, 8, 100);
  myRoundRacer.move();
  myRoundRacer.display();
}

class RoundRacer {
  // 1.Constructor
  constructor(y, a, b, c){
    xPosition = 0;
    yPosition = y;
    this.speed = random(3, 15);
    this.c = color(a , b, c);
  }

  // 2.Class Methods/ Functions 
  display(){
    fill(this.c);
    circle( xPosition, yPosition, 30);
  }

  move(){
    xPosition+= this.speed;
    if (xPosition > windowWidth){
      xPosition = 0;
    }
  }
}
