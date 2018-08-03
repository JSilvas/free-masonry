'use strict';

function randomNum(min, max) {
  return Math.random() * (max - min) + min;
}

function randomRatio() { 
  return { width: randomNum(150, 400), height: randomNum(150, 400) };
}

function assignItemSize() {
  
}

console.log(randomNum(150, 400));
console.log(randomRatio());