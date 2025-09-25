// Working with Images
// Eliz Vo
// September 25, 2025

let lionL, lionR;
let facingRight = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
  noCursor();
}

async function loadAssets(){
  // Handle loading all the images 
  lionL = await loadImage("assets/lion-left.png");
  lionR = await loadImage("assets/lion-right.png");
}

function draw() {
  background(220);
  // print(mouseButton); // CENTER  LEFT  RIGHT 
  if(pmouseX < mouseX){
    // Implies moving right 
    facingRight= true;
  }
  else if (pmouseX > mouseX){
    // Implies moving left 
    facingRight = false;
  }

  if (facingRight){
    image(lionR, mouseX, mouseY, lionR.width/2, lionR.height/2);
  }
  else{
    image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
  }
}
