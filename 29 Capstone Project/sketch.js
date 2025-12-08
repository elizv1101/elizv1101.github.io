// Capstone Project_Timber Man
// Eliz Vo
// December 2, 2025

let myBG;
let myTrunk; 
let myBranch;

let branches=[];

async function setup() {
  rectMode(CORNER);
  createCanvas(700, 700);
  pixelDensity(1);
  myBG = await loadImage("assets/bg.png");
  myTrunk = await loadImage("assets/trunk.png");
  myBranch= await loadImage("assets/branches.png")


  

}

function draw() {
  background(130);
  image(myBG, 0, 0)
  image(myTrunk, 10, 206);   // The height of the tree block is 206
  image(myBranch, 10, 0);
  

}

class Branch{
  constructor(x, y){
    this.x = x; 
    this.y = y;
  }

  display(){
    image(myBranch, this.x, this.y);
  }
}