// Image Animations 
// Eliz Vo
// October 2, 2025

//Global Variables 
let pinImages = [];  // Array === list 
let current = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
  print("done loading");

  // frameRate is not recommended because it is gonna 
  // slow down all interaction.
  // Only recommended for debugging.
  // frameRate(40); 
}

async function loadAssets(){
  // Load all of our pinwheel images
  for (let i = 0; i < 9; i++){ 
  pinImages.push(await loadImage("assets/pin-0"+ i + ".png"));
  }
}

function draw() {
  background(0);
  // animatedWithFor();

  // Manage current image on display
  current += 1; 
  if (frameCount % 10 === 0){
    current += 1;
    if (current > 8) current = 0;

  }

  image(pinImages[current], width/2, height*0.6);
}
// Screen is updated here 



function animateWithFor(){
  // Try to make animations with a FOR loop
  imageMode(CENTER);
  for (i= 0; i < 9; i++){
    image(pinImages[i], width/2, height* 0.6);
  }
}
