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
  for ( let y = 0; y < height; y+=4){
    for (let x = 0; x )
    // Set green value to 0
    pixels[i+1] = 0;  
  }
}


function draw() {
  background(0);
  image(myImage, 0, 0);

  loadPixels();
  colorEffect();
  updatePixels();
}
