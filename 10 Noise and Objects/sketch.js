// Noise and Objects
// Eliz Vo
// September 26, 2025

let ball, ball2, ball3, ball4, ball5, ball6, ball7, ball8;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = {
    //  Object noation. Inside the bracket
    // set up a bunch of 
    // property: value pairs
    x: width, y: height, size: 150,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball2 = {
    x: 200, y: height, size: 150,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball3 = {
    x: 300, y: height, size: 150,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball4 = {
    x: 300, y: height, size: 150,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball5 = {
    x: 200, y: 800, size: 150,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball6 = {
    x: 300, y: 400, size: 150,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball7 = {
    x: 350, y: 700, size: 150,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball8 = {
    x: 350, y: 700, size: 150,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };

}

function draw() {
  // TRICK 1 // background(0);

  // TRICK 2 // clear background with semi-transparent box 
  // fill(255, 20);  // 0-255       opacity 4%
  // rect (0, 0, width, height);
  
  moveBall(ball);
  moveBall(ball2);
  moveBall(ball3);
  moveBall(ball4);
  moveBall(ball5);
  moveBall(ball6);
  moveBall(ball7);
  moveBall(ball8);
}

function moveBall(b){
  // b -> Ball type object 
  // Update ball position and draw provided ball
  
  // Generate random position ( x and y )
  let dx = noise(b.timeX);
  dx = map(dx, 0, 1, -5, 5);
  let dy = noise(b.timeY);
  dy = map (dy, 0, 1, -5, 5);

  // Adavance our noise grapg "cusors"
  b.timeX += b.timeOff; 
  b.timeY += b.timeOff;

  b.x += dx;     b.y += dy;

  // Handle any "wrap-arounds" necessary
  if (b.x < 0) b.x += width;
  else if (b.x > width) b.x -= width;

  if (b.y < 0 ) b.y += height;
  else if (b.y > height) b.y -= height;
  // Render the circle 
  fill(b.c);
  circle(b.x, b.y, b.size);

}