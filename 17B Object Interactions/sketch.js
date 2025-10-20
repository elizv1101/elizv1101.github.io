// Object Interactions 
// Eliz Vo
// Octover 16, 2025

// Global Variables 
let nodes = []; 
let reach = 80;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  // Create one node per press 
  nodes.push(new csNode(mouseX, mouseY));
  // [csNode, csNode, csNode]
  //    0        1       2 
}

function draw() {
  background(40);
  // Loop by item is good when we don't
  // plan on deleting objects from array 
  for (let n of nodes){
    n.move();
    n.display();
    n.connect(nodes);
  }
}

class csNode{
  // 1. Constructor 
  constructor(x, y){
    this.x = x;
    this.y = y; 
    this.size = 1; 
    this.c = color(random(255), random(255), random(255));

    // Properties related to movement/ display
    this.xTime = random(10); 
    this.yTime = random(10);
    this.timeShift = 0.01;
    this.maxSpeed = 5;
  }

    // 2. Class Methods 
  display(){
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.size);
  }
  move(){
    // Use perlin noise for x and y movement 
    let xSpeed = noise(this.xTime);  // 0 - 1
    xSpeed = map(xSpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift;

    this.x += xSpeed;
    if (this.x < 0){
      this.x = width;
    }
    else if (this.x > width){
      this.x = 0;
    }

    //-----Do the same thing for y------
    let ySpeed = noise(this.yTime);  // 0 - 1
    ySpeed = map(ySpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.yTime += this.timeShift;

    this.y += ySpeed;
    if (this.y < 0){
      this.y = height;
    }
    else if (this.y > height){
      this.y = 0;
    }
  }
  connect(nodeArray){
    // Check if the current point is too close to any other 
    // points. If so, join with a line.
    stroke(this.c);
    for (let n of nodeArray){
      // this.x and this.y
      if (n !== this){// make sure not to compare self 
        let d = dist(this.x, this.y , n.x, n.y);
        if (d < reach){ // the two points are close
          line(this.x, this.y, n.x, n.y);
        }
      }
    }
  }
}