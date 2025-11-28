// Horizontal Mirror
// Eliz Vo
// November 28, 2025

let myImage;

async function setup() {
  pixelDensity(1);
  myImage = await loadImage("assets/hand.jpg");
  createCanvas(600, 600);
}

function imageEffect(){
  for ( i = 0; i < pixels.length/2; i++){
    pixels[i + pixels.length/2] = pixels [i];
    pixels[i + pixels.length/2 + 1] = pixels[i+1];
    pixels[i + pixels.length/2 + 2] = pixels[i+2];
  }
}

function draw() {
  background(220);
  image(myImage, 0, 0);

  loadPixels();
  imageEffect();
  updatePixels();
}
