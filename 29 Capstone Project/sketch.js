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
let myStartPage;
let starting = true;
let reset;
let highestScore = 0;


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
  myStartPage = await loadImage("assets/startpage.png");
  
  // Function to pick out the branches randomly 
  // 3 branches are always displayed 
  reset =new ResetButton(width/2 - 35, height/2 +80, 100, 50);
  makeBranch();
}


function draw() {
  background(130);
  if (starting === true){
    image(myStartPage, 0, 0);

    textAlign(CENTER);
    stroke(0, 0, 0);
    textSize(30);
    text("Highest Score: " + highestScore, 130, 40);
  }
  else{
    image(myBG1, 0, 0)
    image(myTrunk, width/2 -100, 50); 
    for (let b of branches){
      b.display();
    }
    
    
    // Display character and animation 
    // when mouse is clicked
    if (hit === true && mouseX < width/2 && starting === false){
      image(costumes[2], 162, 458);
      hit = false;
    }
    else if (hit === true && mouseX > width/2 && starting === false){
      image(costumes[3], 370, 475);
      hit = false;
    }
    else if ( hit === false && mouseX < width/2 && starting == false){
      image(costumes[0], 150, 458);
      
    }
    else if (hit === false && mouseX > width/2 && starting == false ){
      image(costumes[1], 400, 458);
      
    }
  if (lose === true && starting === false){
  
      noStroke();
      fill(255, 255, 0);
      rect(width/2 - 200, height/2 -100, 400, 180);

      fill(255, 20, 40);
      text("GAME OVER", width/2 - 170, height/2 - 70, width/2 , height/2 - 70);
      text("Score: " + count, width/2 -170, height /2, width/2, height/2 - 70);
      textAlign(CENTER);
      textSize(300);
      textWidth(200);

      
     
      reset.display();
      reset.action();

    }
  if (starting === false && lose === false){
    fill(0, 0, 0);
    textSize(50);
    textWidth(10);
    textAlign(CENTER)
    text(count, width/2 - 170, 60, width/2, 60);
  }
  }

  if(keyCode === 32 && keyIsPressed){
    starting = false; 
  }

  if (count > highestScore){
    highestScore = count;
  }
}

function mouseClicked(){
  if (starting === false && lose === false){
    if (branches[0] instanceof BranchRight && mouseX < width/2 && starting === false){
      branches.splice(0,1);
      singleBranch();
      branches[0].y += 175;
      branches[1].y += 175;
      lose = false;
    } 
    else if(branches[0] instanceof BranchRight && mouseX > width/2 && starting === false){
      branches.splice(0,1);
      singleBranch();
      branches[0].y += 175;
      branches[1].y += 175;
      lose = true;
    }

    else if (branches[0] instanceof BranchLeft && mouseX > width/2 && starting === false){
      branches.splice(0,1);
      singleBranch();
      branches[0].y += 175;
      branches[1].y += 175;
      lose = false;
    } 
    else if (branches[0] instanceof BranchLeft && mouseX < width/2 && starting === false) {
      branches.splice(0,1);
      singleBranch();
      branches[0].y += 175;
      branches[1].y += 175;
      lose = true;
    }
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

class ResetButton{
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w,
    this.h = h;
  }

  display(){
    fill( 255, 255, 255);
    rect(this.x, this.y, this.w, this.h)

    fill(0, 0, 0);
    textSize(30);
    text("Again", this.x -125 , this.y + 10, this.x + 35, this.y + 10);
  }

  action(){
    if (mouseIsPressed && mouseX <= this.x + this.w && mouseX >=  this.x && 
      mouseY <= this.y + this.h && mouseY >= this.y){
      hit = false;
      lose = false;
      count = 0;
      starting = true;
      branches.splice(0);
      makeBranch();
    }
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
