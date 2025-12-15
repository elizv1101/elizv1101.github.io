// Capstone Project_Timber Man
// Eliz Vo
// December 2, 2025

let myBG1;
let myTrunk; 
let myBranchRight;
let myBranchLeft;
let RB;
let LB;

let char_01;
let char_11;
let char_12;
let char_13;
let char_14;
let char_15;
let char_16;

let branches=[];

async function setup() {
  rectMode(CORNER);
  createCanvas(700, 700);
  pixelDensity(1);
  myBG1 = await loadImage("assets/bg.png");
  myTrunk = await loadImage("assets/trunk.png");
  myBranchRight = await loadImage("assets/branchright.png")
  myBranchLeft = await loadImage("assets/branchleft.png")
  char_01 =await loadImage("assets/01.png");
  char_11 =await loadImage("assets/11.png");
  char_12 =await loadImage("assets/12.png");
  char_13 =await loadImage("assets/13.png");
  char_14 =await loadImage("assets/14.png");
  char_15 =await loadImage("assets/15.png");
  char_16 =await loadImage("assets/16.png");


  for (let i = 0; i< 2; i++){
    let r = random(0, 1);
    if (r <= 0.5){
      if (i === 0){
        branches.push(new BranchRight(width/2 -37, height/2 - 150));
      }
      else{
        branches.push(new BranchRight(width/2 -37, height/2 - 350));
      }
    }
    else{
      if (i ===0){
        branches.push(new BranchLeft(width/2 - 163, height/2 - 150));
      }
      else{
        branches.push(new BranchLeft(width/2 - 163, height/2 - 350));
      }
    }
  }
}

function draw() {
  background(130);
  image(myBG1, 0, 0)
  image(myTrunk, width/2 -100, height/2 + 50);   // The height of the tree block is 206
  
  image(char_01, 150, 458);

  for (let b of branches){
    b.display();
  }
  
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

// lerp (original_pos, new_pos, change)