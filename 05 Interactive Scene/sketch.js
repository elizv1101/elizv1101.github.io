// Interactive Scene
// Eliz Vo
// September 16, 2025


let x;
let y;
let dis;
let blue;
// variable declaration
function setup() {
  createCanvas(windowWidth, windowHeight);

  x= width/2;
  y= height/1.5;
  blue = 145
  dis = 80
}

function draw() {
  background(24, 70, 120);

  moon();
  river();
  building();
}



function moon(){

}
function river(){
  // This function draws a river. It has a little of
  // color grading in it.
  noStroke();
  fill(0, 90, blue);
  rect(0, y, width, height);
  fill(0, 90, blue+ 10);
  rect(0, y+ dis/2, width, height);
  fill(0, 90, blue+ 20);
  rect(0, y+ dis, width, height);
  fill(0, 90, blue+ 30);
  rect(0, y+ (dis*1.5), width, height);
  fill(0, 90, blue+ 40);
  rect(0, y+ (dis*2), width, height);
  fill(0, 90, blue+ 50);
  rect(0, y+ (dis*2.5), width, height);
  fill(0, 90, blue+ 60);
  rect(0, y+ (dis*3), width, height);
  fill(0, 90, blue+ 70);
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
  rect(0+(dis*2),y-(height/3),100, height/3 );
  rect(0+ (dis*5),y-(height/2.2),100, height/2.2 );
  rect(0+ (dis*7),y-(height/4),100, height/4 );
  rect(0+ (dis*9),y-(height/2.2),100, height/2.2 );
  rect(0+ (dis*11.5),y-(height/3),100, height/3 );
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
}
