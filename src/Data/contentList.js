import lordOfTheRingsArr from './gameOfThronesArray';
import gameOfThronesArr from './gameOfThronesArray';
import starWarsArr from './starWarsArray';

const arr = gameOfThronesArr;

const list = [];

for (var i = 0; i < arr.length; i++) {
  list.push({
    name: arr[i],
    isOpen: false,
    isFind: false,
  });
}

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export const cardList = shuffle([...list, ...list]);
