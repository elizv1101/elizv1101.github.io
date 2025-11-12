// Image Manipulation
// Eliz Vo
// November 12, 2025

let pilot;


function setup() {
  loadAssets();
  createCanvas(891, 892);
  pixelDensity(1);
}  // Safeguard

async function loadAssets(){
  pilot = await loadImage("assets/aviator.png");
}                                                                                                             

function setPixelOneD(position, r, g, b){
  // Position = 1D location in pixels array (ted component)
  // r, b, g = new color for that pixel
  pixels[position] = r; 
  pixels[position + 1] = g;
  pixels[position + 2] = b;
}

function setPixel(x, y, r, g, b){
  // x, y = pixels' location
  // r, g, b = new pixel color
  let index = (width * y + x) * 4;
  setPixelOneD(index, r, g, b);
}

function draw() {
  image(pilot, 0, 0);
  loadPixels(); // Fills the "canvas" pixel array

  // Run a filter to modify the pixel array
  // boost()
  // greyscale();
  background(0);
  textImage( );


  // updatePixels();
}

function textImage(){
  // Render an image using characters
  fill(255);
  for (let x = 0; x < width; x+= 10){
    for (let y = 0; y < height; y += 10){
      let avg = getAvg(x, y);
      if (avg > 200){
        text("%", x, y);
      }
      else if(avg > 100){
        
      }
    }
  }
}

function getAvg(x, y){
  // Returm the avg intensity og pixel (x, y)
  let i = (width* y + x)* 4;
  let r = pixels[i];
  let g = pixels[i + 1];
  let b = pixels[i + 2];
  return(r+b+g)/3;
}

function greyscale(){
  // Use the average value of each pixel to
  // turn it grey
  for (let x = 0; x < width; x++){
    for (let y = 0; y < height; y++){
      let avg = getAvg(x,y);
      setPixel(x, y, avg, avg, avg);
    }
  }

}

function boost(){
  let boost = map(mouseX, 0, width, -100, 100);
  for(let i = 0; i< pixels.length; i += 4){
    let r = pixels[i] + boost;
    let g = pixels[i+1] + boost;
    let b = pixels[i+2] + boost;
    setPixelOneD(i, r, g, b);
  }
}