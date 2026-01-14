// Final Coding Challenge
// Eliz Vp
// January 13, 2026

let gorillaIdle = [];
let gorillaSwipe = [];
let spiralImages = [];

// (Gorilla Related)
let idleIndex = 0;
let swipeIndex = 0;
let gorillaState = 0;   // 0 - idle    1 - swipe
let gorillaX = 200;

// (Spiral Related)
let spiralObjects = [];


async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();
}

async function loadAssets(){
  // Circles
  for (let i = 0; i<= 15; i++){
    if (i < 10){
      spiralImages.push(loadImage("assets/Circle/circle0" +i+ ".png"));
    }
    else{
      spiralImages.push(loadImage("assets/Circle/circle"+i+".png"));
    }
  }

  //Gorilla
  for (let i = 1; i<= 6; i++){
    gorillaIdle.push(loadImage("assets/Gorilla/idle"+i+".png"));
    gorillaSwipe.push(loadImage("assets/Gorilla/swipe"+i+".png"));
  }
}

function drawGorilla(){
  // Render the gorilla at its position
  // choosing the correct image for animation playback 
  if (gorillaState === 0){   // IDLE
    image(gorillaIdle[idleIndex], gorillaX, height/2);

    if (frameCount % 11=== 0){
      idleIndex++
      if (idleIndex > 5){
      idleIndex = 0;
      }
    }
  }
  else if (gorillaState === 1){  // SWIPE
    image(gorillaSwipe[swipeIndex], gorillaX, height/2);

    if (frameCount % 11=== 0){
      swipeIndex++
      if (swipeIndex > 5){
      swipeIndex = 0;
      }
    }
  }
}

// function keyPressed(){
//   // Triggers automatically once per press event 
//   if (key === " "){

//   }
// }

function moveGorilla(){
  // Checking for keypress once per frame 
  // is better for a continous detection
  if (keyIsDown(77)){
    if (mouseX < gorillaX){
      gorillaX -= 5;
    }
    else{
      gorillaX += 5;
    }
  }
}

function mousePressed(){
  // Triggers automatially once per click event 
  spiralObjects.push(new Spiral(mouseX, mouseY));
}

function draw() {
  background(0);

  drawGorilla();
  moveGorilla();

  // Spiral
  for (let i = 0; i < spiralObjects.length; i++){
    let s = siralObjects[i];
    s.display();

    if (s.active === false){
      spiralObjects.splice(i, 1);
    }
  }
}

class Spiral{
  constructor(x, y){  // Runs once each time object is made
    this.x = x;
    this.y = y;
    this.currentFrame = 0;
    this.active = true;   // To mark for removal 
  }

  display(){
    if (this.currentFrame > 15){
      this.active = false;
    }
    else{
      image(spiralImages[this.currentFrame], this.x, this.y);

      if (frameCount % 3 === 0){
      this.currentFrame++;
      }
    }
  }
}