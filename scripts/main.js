'use strict';

function randomNum(min, max) {
  return Math.random() * (max - min) + min;
}

function randomRatio() {
  return { width: randomNum(150, 400), height: randomNum(150, 400) };
}

function assignItemSize() {

}


const allItems = [];


function renderItems() {
  
  let galleryEl = document.getElementById('gallery');
  
  let itemCount = 0;
  
  while (itemCount <= 12) { // for loop to generate items
    itemCount += 1;
    
    let itemEl = document.getElementById('item'); // create new html item
    // itemEl.textContent('');

    itemEl.setAttribute('height', randomRatio().height);  // assignItemSize

    galleryEl.appendChild(itemEl);  // return new item
  }
}


console.log(randomNum(150, 400));
console.log(randomRatio());

renderItems();