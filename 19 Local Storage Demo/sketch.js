// Local Storage Demo
// Eliz Vo
// October 24, 2025


// 1. Use array of Boucers to get a higher score
// 2. Modify class so that each Bouncer rotates around its center
// 3. Style the Bouncer


let mySquare;
let totalBounces = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  mySquare= new Bouncer(width/2 , height/2);
  textSize(30);
  textAlign(CENTER, CENTER);
  if (localStorage.getItem("numBounces")=== null){
    localStorage.setItem("numBounces", 0);
  }
  else{  // Implied a stored number of bounces
    totalBounces = int(localStorage.getItem("numBounces"));
  }
}

function draw() {
  background(60);
  mySquare.move();
  mySquare.display();
  text(totalBounces, width/2, height/2);
}

class Bouncer{
  constructor(x, y){
    this.x = x;   this.y = y;
    this.xSpeed = random(0, 10);
    this.ySpeed = random(0, 10);
  }

  display(){
    square(this.x, this.y, 30);
  }

  move(){
    // Calculate new position
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // Bounce 
    if (this.x <= 0 || this.x >= width){
      this.xSpeed *= -1;
      totalBounces ++;
      localStorage.setItem("numBounces", totalBounces);
    }
    if (this.y <= 0 || this.y >= height){
      this.ySpeed *= -1;
      totalBounces ++;
      localStorage.setItem("numBounces", totalBounces);
    }
  }
}
