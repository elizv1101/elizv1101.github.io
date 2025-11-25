// Working with Vectors
// Eliz Vo
// November 21, 2025

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);
  if (mouseIsPressed){
    objects.push(new Ball(mouseX,mouseY));
  }

  for (let o of objects){
    o.calcMouse();
    o.display();
    o.move();
  }
}

class Ball {
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(random(-5, 5),random(-5, 5) );
    this.grav = createVector(0, 0.2);
  }

  move(){
    this.pos.add(this.grav);
    this.vel.limit(20); 
    this.pos.add(this.vel);

    // Wall-floor bounce 
    if (this.pos.x < 0|| this.pos.x > width ){
      this.vel.x *= -1; 
    }
    if ( this.pos.y > height ){
      this.vel.y *= -1; 
    }
  }

  calcMouse(){
    this.grav = createVector (mouseX, mouseY);
    this.grav.sub(this.pos);
    this.grav.normalize();
    this.grav.mult(4);
  }

  display(){
    let endX = this.pos.y + this.vel.x; 
    let endY = this.pos.y + this.vel.y
    // Display ball 
    circle(this.pos.x, this.pos.y, 20);

    // Display vectors
    if (false){
      stroke(255, 0, 0);
      line (0,0, this.pos.x, this.pos.y);

      stroke(0, 0, 255);
      line (this.pos.x, this.pos.y, 
      this.pos.x + this.vel.x, this.pos.y + this.vel.y);

      stroke(0, 255, 0);
      line(endX, endY, endX + this.grav.x, endY + this.grav.y);
    }
  }
}