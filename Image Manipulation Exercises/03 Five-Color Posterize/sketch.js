// Five-Color Posterize
// Eliz Vo
// November 26, 2025
let myImage;


async function setup() {
  pixelDensity(1);
  myImage = await loadImage("assets/nuit.jpg");
  createCanvas(600, 600);
}

function colorEffect(){
  for (i= 0; i < pixels.length; i += 4){
    let red = pixels[i];
    let green = pixels[i+1];
    let blue = pixels[i+ 2];
    let average = (red + green + blue)/ 3;

    if (205 < average < 255){
      pixels[i] = 205;
      pixels[i+1];
      pixels[i+ 2];
    }
  }
}


function draw() {
  background(220);
  image(myImage, 0, 0);

  loadPixels();
  colorEffect();
  updatePixels();
}
