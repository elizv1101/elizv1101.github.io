// Sorting Lesson 
// Elis Vo
// January 7, 2026

let values = [];
const ARRAY_SIZE = 20;


function setup() {
  noCanvas();
  populateArray();
  print(values);   // unsorted 
  // selectionSort();
  bubbleSort();
  print(values);
}

function selectionSort(){
  // For each index, find the smallest remaining value on right
  // and swap if it is smaller than the item at the index
  for (let i =0; i < ARRAY_SIZE - 1; i++){
    let minimum = values[i];
    let minimumIndex = i;
    for (let search = i+1; search < ARRAY_SIZE; search++){
      let curr = values[search];
      if (curr < minimum){
        minimum = curr;
        minimumIndex = search;
      }
    } 
    let temp = values[i];
    values[i] = values[minimumIndex];
    values[minimumIndex] = temp;
  }
}

function bubbleSort(){
  for(let i = 0; i< ARRAY_SIZE - 1; i++){
    for(let i = 0; i< ARRAY_SIZE - 1; i++){
      if (values[i] > values[i+1]){
        let first = values[i];
        let second = values[i+1];
        values[i] = second;
        values[i+1] = first;
      }
    }
  }
}

function populateArray(){
  // Using a loop, fill out array randomly 
  for (let i = 0; i < ARRAY_SIZE; i++){
    values.push(floor(random(1000)));   // 0 - 999
  }
}