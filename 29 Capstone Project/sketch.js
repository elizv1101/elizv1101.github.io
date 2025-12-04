// Capstone Project_Virtual Aquarium
// Eliz Vo
// December 2, 2025

let myImage;
let myImage2; 
let myImage3;

let myItem;
let myList;
let myWater;
let mySand;
let myGrass;
let myYellowGoldFish;
let myWhiteGoldFish;
let items = [];

async function setup() {
  rectMode(CORNER);
  createCanvas(700, 700);
  pixelDensity(1);
  myImage = await loadImage("assets/aquarium.png");
  myImage2 = await loadImage("assets/yellowgoldfish.png");
  myImage3 = await loadImage("assets/whitegoldfish.png");

  myList = new ItemList(600, 100);
  myWater = new Water(630, 130);
  mySand = new Sand(675, 130);
  myGrass = new Grass(630, 180);


  myYellowGoldFish = new YellowGoldFish(600, 300)
  myWhiteGoldFish = new WhiteGoldFish(645, 300)
}

function draw() {
  background(130);
  image(myImage, 100, 100)

  myList.display();
  myWater.display();
  myWater.choose();
  mySand.display();
  myGrass.display();
  myYellowGoldFish.display();
  myWhiteGoldFish.display();
  table();
}

// Function to make the table 
function table(){
  noStroke();
  fill(170, 80, 10);
  rect(0, 528, width, 250);
}

//////////////////////////////////////////////
///////////CODES FOR THE GAME/////////////////
//////////////////////////////////////////////

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


// Class of items in the list
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

  choose(){
    if (mouseIsPressed && dist(mouseX, mouseY, this.x, this.y) < 15){
      fill(0,0,255);
      circle(mouseX, mouseY, 30)
    }
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

class Grass{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  display(){
    strokeWeight(1);
    stroke(40,230, 100); 
    for(let i = 0; i < 10; i+= 2){
      let u = 5;
      u ++;
      line(this.x- i, this.y -10, this.x- i, this.y+ u);
      line(this.x+ i, this.y -10, this.x+ i, this.y+ u);
    }
  }
}


class YellowGoldFish{
  constructor(x, y){
    this.x = x; 
    this.y = y;
  }

  display(){
    image(myImage2, this.x, this.y);
  }
}



class WhiteGoldFish{
  constructor(x, y){
    this.x = x; 
    this.y = y;
  }

  display(){
    image(myImage3, this.x, this.y);
  }
}





