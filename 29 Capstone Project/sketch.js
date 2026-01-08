// Capstone Project_Timber Man
// Eliz Vo
// December 2, 2025

let myBG1;
let myTrunk; 
let myBranchRight;
let myBranchLeft;
let RB;
let LB;
let hit = false;
let r;
let lose = false;
let count = 0;

let costumes = [];
let branches=[];



async function setup() {
  rectMode(CORNER);
  createCanvas(700, 700);
  pixelDensity(1);

  // Load assets
  myBG1 = await loadImage("assets/bg.png");
  myTrunk = await loadImage("assets/trunk.png");
  myBranchRight = await loadImage("assets/branchright.png")
  myBranchLeft = await loadImage("assets/branchleft.png")
  costumes.push(await loadImage("assets/01.png"));
  costumes.push(await loadImage("assets/01R.png"));
  costumes.push(await loadImage("assets/11.png"));
  costumes.push(await loadImage("assets/11R.png"));


  // Function to pick out the branches randomly 
  // 3 branches are always displayed 
  makeBranch();
}

function draw() {
  background(130);
  image(myBG1, 0, 0)
  image(myTrunk, width/2 -100, 50);  
  

  for (let b of branches){
    b.display();
  }
  
  // Display character and animation 
  // when mouse is clicked
  if (hit === true && mouseX < width/2){
    image(costumes[2], 162, 458);
    hit = false;
  }
  else if (hit === true && mouseX > width/2){
    image(costumes[3], 370, 475);
    hit = false;
  }
  else if ( hit === false && mouseX < width/2){
    image(costumes[0], 150, 458);
    
  }
  else{
    image(costumes[1], 400, 458);
    
  }
if (lose === true){
    fill(255, 20, 40);
    text("GAME OVER", width/2 - 170, height/2 - 100, width/2 , height/2 - 100);
    textAlign(CENTER);
    textSize(300);
    textWidth(20);
  }
  text(count, width/2 - 15, 60, width/2, 60);
  textSize(50);
  textWidth(10);
}

function mouseClicked(){
  if (branches[0] instanceof BranchRight && mouseX < width/2){
    branches.splice(0,1);
    singleBranch();
    branches[0].y += 175;
    branches[1].y += 175;
    lose = false;
  } 
  else if(branches[0] instanceof BranchRight && mouseX > width/2){
    branches.splice(0,1);
    singleBranch();
    branches[0].y += 175;
    branches[1].y += 175;
    lose = true;
  }

  else if (branches[0] instanceof BranchLeft && mouseX > width/2){
    branches.splice(0,1);
    singleBranch();
    branches[0].y += 175;
    branches[1].y += 175;
    lose = false;
  } 
  else if (branches[0] instanceof BranchLeft && mouseX < width/2) {
    branches.splice(0,1);
    singleBranch();
    branches[0].y += 175;
    branches[1].y += 175;
    lose = true;
  }

  if ( lose === false){
    hit = true;
    count += 1;
  }
  }
 

// Classes for two types of branches 
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

function makeBranch(){
  while( branches.length < 3){
    for (let i = 0; i< 3; i++){
      r = random(0, 1);
      if (r <= 0.5){
        if (i === 0){
          branches.push(new BranchRight(width/2 -37, height/2));
        }
        else if (i === 1){
          branches.push(new BranchRight(width/2 -37, height/2 - 175));
        }
        else if (i === 2){
          branches.push(new BranchRight(width/2 -37, height/2 - 350));
        }
      }
      else{
        if (i ===0){
          branches.push(new BranchLeft(width/2 - 163, height/2));
        }
        else if (i === 1){
          branches.push(new BranchLeft(width/2 -163, height/2 - 175));
        }
        else if (i === 2){
          branches.push(new BranchLeft(width/2 -163, height/2 - 350));
        }
      }
    }
  }
}

function singleBranch(){
  r = random(0, 1);
      if (r <= 0.5){
       
        branches.push(new BranchRight(width/2 -37, height/2 - 350));
      }
      else{
        
        branches.push(new BranchLeft(width/2 -163, height/2 - 350));
      }
}









// 0 1 1 2 4 5 8 9 9 11