// Map Data Structure and Reading Files
// Eliz Vo
// October 31, 2025

let textFile;

async function preload(){
  // Use this function to load the text
  // from our files
  textFile = loadStrings("assets/info.txt");
  imgText = loadStrings("assets/colorImage.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // processText();

  // Determine the # of rows and columns
  rows = imgText.length;
  cols = imgText[0].length;

  // Construct the map of colors 
  colorMap = new Map([
    ["b", "black"],
    ["w", color(255)],
    ["r", color(255,0,0)],
    ["l", "purple"],
    ["p", "green"]
  ]);

  drawImage();
}

function processText(){
  // Loo at 3 different was to split up a larger
  // string into words or individual characters
  // split() and spread synax

  print("SPLIT INTO WORDS");
  let splitWords = textFile[0].split(" ")
  print(splitWords);


  print("SPLIT INTO CHARACTERS");
  let splitChars = textFile[1].split("")
  print(splitChars);


  print("SPREAD INTO CHARACTERS");
  let spreadChars = [...textFile[2]];
  print(spreadChars);
}

function drawImage(){
  // Read through our text info 
  // an costruct an image

  let pixelSize = 50;
  for (let y = 0; y < rows; y++){
    for (let x = 0; x< cols; x++){
      let currentRow = imgText[y];
      let currentKey = imgText[x];
      fill(colorMap.get(currentKey));
      rect(x*pizelSize, y*pixelSize, pixelSize, pixelSize);
    }
  }
}

function draw() {

}
