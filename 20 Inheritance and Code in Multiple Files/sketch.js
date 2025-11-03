// Inheritance and Code in Multiple Files
// Eliz Vo 
// October 30, 2025

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i<= 50; i++){
    objects.push(new AnimatedObject(random(width), random(height)));
    objects.push(new CircleObject(random(width), random(height)));
    objects.push(new LineObject());
  }
  
}

function draw() {
  background(200);
  for (let o of objects){
    o.move();
    o.display();
  }
}

// Parent Class (Super Class)
// ---- If all in one file, should occur first ----

