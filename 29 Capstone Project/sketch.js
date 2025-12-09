// Capstone Project_Timber Man
// Eliz Vo
// December 2, 2025

let myBG1;
let myTrunk; 
let myBranchRight;
let myBranchLeft;

let branches=[];

async function setup() {
  rectMode(CORNER);
  createCanvas(700, 700);
  pixelDensity(1);
  myBG1 = await loadImage("assets/bg.png");
  myTrunk = await loadImage("assets/trunk.png");
  myBranchRight= await loadImage("assets/branchright.png")
  myBranchLeft= await loadImage("assets/branchleft.png")

  

}

function draw() {
  background(130);
  image(myBG1, 0, 0)
  image(myTrunk, width/2 -100, height/2 + 50);   // The height of the tree block is 206
  image(myBranchRight, width/2 -37, height/2 -150);
  image(myBranchLeft, width/2-163, height/2 -350);

}

class BranchRight{
  constructor(x, y){
    this.x = x; 
    this.y = y;
  }

  display(){
    image(myBranchRight, this.x, this.y);
  }
}

class BranchLeft{
  constructor(x, y){
    this.x = x; 
    this.y = y;
  }

  display(){
    image(myBranchLeft, this.x, this.y);
  }
}