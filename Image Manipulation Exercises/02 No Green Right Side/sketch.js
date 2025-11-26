// No Green Right Side
// Eliz Vo
// November 17, 2025 

let myImage;


async function setup() {
  pixelDensity(1);
  myImage = await loadImage("assets/race.jpg");
  createCanvas(600, 600);
}

function colorEffect(){
  // Double loop
  for ( let y = 0; y < height; y+=1){
    for (let x = 0; x < width; x +=1){
    index = (height* y+ x)*4;

    if ( x > width/ 2){
      // Set green value to 0
      pixels[index+1] = 0;
    }
    }
  }
}


function draw() {
  background(0);
  image(myImage, 0, 0);

  loadPixels();
  colorEffect();
  updatePixels();
}
