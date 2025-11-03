// Do not edit the code between these comments. 
// You should only edit the class Particle below.
// -----------------------------------------------
let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");

  for (let i=fireworks.length-1; i>=0; i--) {
    fireworks[i].update();
    fireworks[i].display();
  }
}

function mousePressed() {
  for (let i=0; i<100; i++) {
    let someParticle = new Particle(mouseX, mouseY);
    fireworks.push(someParticle);
  }
}

// -----------------------------------------------

class Particle {
  // Your code should go here!
  // Make the class work as described in the quiz question...
  constructor(x, y){
    this.x = x;
    this.y = y; 
    this.size = 10
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.color = color(255, 255, 255);
  }
  
  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }
  
  update(){
    this.x += this.dx;
    this.y += this.dy;
    
  }
}