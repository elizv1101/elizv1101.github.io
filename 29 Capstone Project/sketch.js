// Capstone Project_Virtual Aquarium
// Eliz Vo
// December 2, 2025

let myImage;

async function setup() {
  rectMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  pixelDensity(2);
  myImage = await loadImage("assets/aquarium.png");
}

function draw() {
  background(150);
  image(myImage, 150, 150);
  table;ellipse();
}

function table(){
  fill(150, 180, 170);
  rect(0, 700, 700);
}