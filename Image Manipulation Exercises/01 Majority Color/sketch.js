// Image Processing
// Eliz Vo 
// November 14, 2025

let myImage;

async function setup() {
  pixelDensity(1);
  myImage = await loadImage("assets/chip.jpg");
  createCanvas(600, 600);
}

// For each pixel, remove the red component ( set to 0 )
//                 havle the blue component ( i/2 )
// R, G, B, A, R, G,...

function colorEffect(){
  // Use the single loop strategy 

  // If value of red is greatest then that pixel change to red 
  for (let i = 0; i < pixels.length; i+= 4){
    if (pixels[i]> pixels[i+1] && pixels[i] > pixels[i+2]){
      pixels[i] = 255;   // RED
      pixels[i+1] = 0;
      pixels[i+2] = 0;
    }

    // If value of green is greatest then that pixel change to green 
    else if (pixels[i+1]> pixels[i] && pixels[i+1] > pixels[i+2]){
      pixels[i+1] = 255;  // GREEN
      pixels[i] = 0;
      pixels [i+2] = 0;
    }

    // If value of blue is greatest then that pixel change to blue 
    else if (pixels[i+2]> pixels[i] && pixels[i+2] > pixels[i+1]){
      pixels[i+2] = 255;  // BlUE
      pixels[i] = 0;
      pixels [i+1] = 0;
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
