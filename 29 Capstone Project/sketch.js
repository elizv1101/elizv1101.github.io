// Capstone Project_Virtual Aquarium
// Eliz Vo
// December 2, 2025

let myImage;
let myItem;
let myList;
let myWater;
let mySand;
let items = [];

async function setup() {
  rectMode(CORNER);
  createCanvas(700, 700);
  pixelDensity(1);
  myImage = await loadImage("assets/aquarium.png");
  myList = new ItemList(600, 100);
  myWater = new Water(630, 130);
  mySand = new Sand(675, 130)
}

function draw() {
  background(130);
  image(myImage, 100, 100)
  myList.display();
  myWater.display();
  mySand.display();

  table();
}
//////////////////////////////////////////////
///////////CODES FOR THE GAME/////////////////
//////////////////////////////////////////////
class Water{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  display(){
    noStroke();
    fill(0, 0, 255);
    circle(this.x, this.y, 30);
  }
}

class Sand{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  display(){
    noStroke();
    fill(255,225, 100);
    circle(this.x, this.y, 30);
  }
}
// Class for the list of item to put
// into the aquarium
class ItemList{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  display(){
    noStroke()
    fill(0);
    rect(this.x, this.y, 100, 360);
    fill(255);
    for (let i = 10; i <= 310; i+= 50){
      rect(this.x+10, this.y+i, 40, 40);
      rect(this.x+55, this.y+i, 40, 40);
    }
  }
}




class YellowGoldFish{
  constructor(x, y){
    this.x = x; 
    this.y = y;
    
  }
}



// Function to make the table 
function table(){
  noStroke();
  fill(153, 76, 0);
  rect(0, 528, width, 250);
}