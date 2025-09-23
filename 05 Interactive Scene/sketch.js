// Interactive Scene
// Eliz Vo
// September 16, 2025


let x;
let y;
let dis;
let blue;
let currentBack;
// variable declaration


function setup() {
  createCanvas(windowWidth, windowHeight);

  x= width/2;
  y= height/1.5;
  blue = 145;
  dis = 80;
  currentBack =0;
}



function draw() {

  // set the background based on the 
  // value of the variable.
  // This is the default night with a big moon
  if (currentBack === 0){
    background(0, 90, blue+ 60);
    moon1();
  }


  // No moon night, I make it a little darker
  // since there is no moon.
  if (currentBack === 1){
    background(0, 80, blue);
  }


  // Small moon at the corner of the canvas
  if (currentBack===2){
    background(0, 90, blue+ 60);
    moon2();
  }

  // Code to draw the scenery
  river();
  building();
  light();
  alien();

  // My name in the left bottom corner
  strokeWeight(1);
  textSize(32);
  text("Eliz Vo", 10, height*0.99);
}


// Draw the moon using circle
// This is the big moon
function moon1(){
  noStroke();
  fill(252, 223, 105);
  circle(x,y, y*1.5);
}


// The small moon for the third background
function moon2(){
  noStroke();
  fill(252, 223, 105);
  circle(width- (x/5), y/6, 130);
}


// This function draws a river
// using rectangles
// There are some gradings to it
function river(){
  noStroke();
  fill(0, 90, blue);
  rect(0, y, width, height);
  fill(0, 90, blue+ 20);
  rect(0, y+ dis/2, width, height);
  fill(0, 90, blue+ 40);
  rect(0, y+ dis, width, height);
  fill(0, 90, blue+ 60);
  rect(0, y+ (dis*1.5), width, height);
  fill(0, 90, blue+ 80);
  rect(0, y+ (dis*2), width, height);
  fill(0, 90, blue+ 100);
  rect(0, y+ (dis*2.5), width, height);
  fill(0, 90, blue+ 120);
  rect(0, y+ (dis*3), width, height);
  fill(0, 90, blue+ 140);
  rect(0, y+ (dis*3.5), width, height);
}




// This function is to draw buildings as it is
// a city landscape. I make many rectangles
// resembles the shape of buildings.
function building(){
  noStroke();
  fill(175, 82, 250);
  // This is the code for the furthest buildings 
  // They have lighter color because it is far away.
  rect(0,y-(height/4),100, height/4 ); 
  rect(0+(dis*2),y-(height/3),95, height/3 );
  rect(0+ (dis*5),y-(height/2.2),100, height/2.2 );
  rect(0+ (dis*7),y-(height/4),120, height/4 );
  rect(0+ (dis*9),y-(height/2.7),100, height/2.7 );
  rect(0+ (dis*11.2),y-(height/3),90, height/3 );
  // This section is to draw the building slightly
  // nearer to us. So they have a darker color.
  fill(123, 25, 201);
  rect(0,y-(height/6),50, height/6 );
  rect(0 + dis,y-(height/10),100, height/10 ); 
  rect(0+(dis*2.5),y-(height/8),70, height/8 );
  rect(0+ (dis*3.5),y-(height/5),150, height/5 );
  rect(0+ (dis*5.75),y-(height/11),80, height/11 );
  rect(0+ (dis*6.5),y-(height/5),80, height/5 );
  rect(0+ (dis*8),y-(height/6),160, height/6 );
  rect(0+ (dis*10.5),y-(height/4),80, height/4 );
  rect(0+ (dis*11),y-(height/6),160, height/6 );
  // Nearets buildings, darkest color among the three.
  // I want to make more details, since they're pretty close 
  // to the narrator.
  fill(79, 26, 122);
  rect(0,y-(height/10),20, height/10 );
  rect(0,y-(height/18),110, height/18 );
  rect(0+70,y-(height/13),2, height/13 );
  rect(0+(dis*1.75),y-(height/12),75, height/12 );
  rect(0 + (dis*3),y-(height/19),80, height/19 ); 
  rect(0+(dis*3.5),y-(height/13),70, height/13 );
  rect(0+ (dis*4),y-(height/10),2.5, height/10 );
  rect(0+ (dis*4.75),y-(height/8),100, height/8 );
  rect(0+ (dis*5),y-(height/6),2.5, height/6 );
  rect(0+ (dis*6.25),y-(height/23),25, height/23 );
  rect(0+ (dis*6.75),y-(height/6.5),125, height/6.5 );
  rect(0+ (dis*7.75),y-(height/4.5),70, height/4.5);
  rect(0+ (dis*8.5),y-(height/4),2.5, height/4 );
  rect(0+ (dis*9),y-(height/7.25),90, height/7.25 );
  rect(0+ (dis*10),y-(height/17),90, height/17);
  rect(0+ (dis*9.25),y-(height/6.25),2.5, height/6.25);
  rect(0+ (dis*11.3),y-(height/11),60, height/11);
  // I made a thin line to distinct between the ground and the river.
  stroke(0,0,0);
  strokeWeight(1);
  line(0, y, width, y)
}




// My character is an UFO with an alien in it.
// I want to draw it using circles, ellipses, and lines.
// The UFO follows the mouse.
function alien(){
  // The "head" of the UFO
  noStroke();
  fill(208, 221, 245); 
  circle(mouseX, mouseY, 50); 
  // Then I draw the alien
  fill(30, 179, 68);
  noStroke();
  circle(mouseX, mouseY-5, 25);
  // The "body" of the UFO
  noStroke();
  fill(40, 41, 46);
  ellipse(mouseX, mouseY+20, 100, 35); 
  // These are for the legs of the UFO
  stroke(40, 41, 46);
  strokeWeight(5);
  line(mouseX-40, mouseY+25, mouseX-50, mouseY+45);
  line(mouseX, mouseY+25, mouseX, mouseY+55);
  line(mouseX+40, mouseY+25, mouseX+50, mouseY+45);

}


// I want to add a feature where the UFO casts the
// light when the mouse is clicked.
function light(){
  if (mouseIsPressed){
    noStroke();
    fill(219, 157, 23)
    triangle(mouseX, mouseY, mouseX-70, mouseY+130, mouseX+70, mouseY +130);
  }
}


// Make a function to count whenever ENTER is clicked.
// From that number the background will change.
function keyPressed(){
  if (keyCode=== ENTER && keyIsPressed ){
    print("change back");
    currentBack++;
    if (currentBack > 2){
      currentBack = 0;
    }
  }
}