// Centering 3D Fractal
// Eliz Vo
// December 5, 2025

let angle = 10; 


function setup() {
  createCanvas(800, 600, WEBGL);
  angleMode( DEGREES);
}

function draw() {
  background(220);
  orbitControl();
  lights();
  angle = map(mouseX, 0, width, -220, 220);

  fill(255, 30, 10);

  for (let i =0; i < 360; i += 45){
    push();
    rotateY(radians(i));
    drawBox(50);
    pop();
  }

}

function drawBox(size){
  if (size > 3){

    translate(size*1.5, 0);
    rotateY(radians(angle));
    box(size);

    drawBox(size*0.8);
  }
}