// Multiple Keys and Outlines
// Eliz Vo
// September 15, 2025

// keyIsDown( "keyCode")  -> returns a boolean
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  background(220);
  checkMulti();
}

function checkMulti(){
  strokeWeight(mouseX/10);
  stroke(255, 144,216);
  fill(252,238,15);
  textStyle(ITALIC, 50, 40);
  // check for multiple keys (3 simulateneous)
  let a = keyIsDown(65); //"a"
  let b = keyIsDown(66); //"b"
  let c = keyIsDown(67); //"c"
  text("a: " + a + "\tb: " + b + "\tc: " +c, width/2, height/2);
}
