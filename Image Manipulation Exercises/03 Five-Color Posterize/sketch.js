// Five-Color Posterize
// Eliz Vo
// November 26, 2025
let myImage;
let average = 0;;

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
    average = (red + green + blue)/ 3;

    if (205 <= average && average <= 255){
      pixels[i] = 230;
      pixels[i+1] = 170;
      pixels[i+ 2] = 220;
    }
    else if (155 <= average && average <= 204){
      pixels[i] = 200;
      pixels[i+1] = 105;
      pixels[i+ 2] = 210;
    }
    else if (105 <= average && average <= 154){
      pixels[i] = 180;
      pixels[i+1] = 120;
      pixels[i+ 2] = 60;
    }
    else if (55 <= average && average <= 104){
      pixels[i] = 150;
      pixels[i+1] = 30;
      pixels[i+ 2] = 130;
    }
    else if (0 <= average && average <= 54){
      pixels[i] = 90;
      pixels[i+1] = 10;
      pixels[i+ 2] = 50;
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
