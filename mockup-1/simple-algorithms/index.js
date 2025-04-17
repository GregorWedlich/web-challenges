/*
  Goal: Find the maximum

  Step1: Compare num1 with num2 : num1 > num2 : return num1
  Step2: if num2 is greater than return num2
*/
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) return num1;
  return num2;
}
console.log(maxOfTwoNumbers(45, 9));

/*
  Goal: Find the longest word

  Steps: We itterate with are loop over the array of words.
  On every itteration we add the word to an variable with an empty string.
  After that we can compare the longestWord with the new word.
*/
const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  if (words.length === 0) return null;
  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord(words));

/*
  Goal: Calculate the sum

  Steps: We need a variable that save the last sumerize value and a looop there is
  itterate and add the new value to the last.

  The easiast way to do this is with the reduce array function thats get an accumulator and
  add every itteration the number.
*/
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  const sumNum = numbers.reduce((acc, num) => {
    return acc + num;
  }, 0);
  return sumNum;
}
console.log(sumNumbers(numbers));

/*
  Goal: Calculate the average length of the words

  Steps: 
  1. Calculate length of all words
  2. Itterate over the array and added to a akkumulator variable
  3. Devide total length with the count of the words
  4. return the result
*/
const words2 = [
  "eclipse",
  "harmony",
  "cascade",
  "labyrinth",
  "quartz",
  "serendipity",
  "zenith",
  "ephemeral",
  "vortex",
  "mystique",
];

function averageWordLength(words) {
  if (words.length === 0) return null;
  const totalLength = words.reduce((acc, word) => {
    return acc + word.length;
  }, 0);

  const avgLength = totalLength / words.length;
  return avgLength;
}
console.log(averageWordLength(words2));

/*
  Goal: Unique arrays - return an array without duplicates

  Steps: 
  1. We can do with reduce and includes string method
  2. But with the new Set it gets easier

  Set converts the Array to an Object without duplicates. 

*/
const words3 = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

// The simplest way is to use Set. Set creates a new Object without duplikates
// The spread operator "..." converts the the Object back to an array
function uniquifyArray(words) {
  if (words.length === 0) return [];
  return [...new Set(words)];
}
console.log(uniquifyArray(words3));

/*
  Goal: Find elements
  
  Steps:
  1. Compare "needle" word with the entrys in the array "wordsFind"
  2. I use find for this Array Method
*/
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(haystack, needle) {
  return haystack.includes(needle);
}

console.log(doesWordExist(wordsFind, "matter"));

/*
  Goal: Count repetition
  
  Steps:
  1. We need an Variable for save the current state of repetition
  2. We itterate over the array and compare the occured words from the array with the searched word
  3. Than we return the searched word and this occurrences.

  I use the Array reduce method
*/
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(haystack, needle) {
  const count = haystack.reduce(
    (acc, word) => (word === needle ? acc + 1 : acc),
    0
  );

  // const count = haystack.reduce((acc, word) => {
  //   if (word === needle) {
  //     return acc + 1;
  //   } else {
  //     return acc;
  //   }
  // }, 0);

  return count;
}
console.log(howManyTimes(wordsCount, "matter"));

/*
  Goal Bonus: A generic sum function, for strings use the length of the string, for booleans use 1 and 0
  
  Steps:
  1. We must itterate over the arrays items and check which type the item has
  2. If the item a string, count the length an add to a Variable named "sum"
  3. If the item a number, at the number to the string
  4. If the item a bool, add 0 when false and 1 when true
  5. Return the sum

*/
const mixedArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  42,
  7,
  1995,
  23,
  true,
  false,
];

// Long version
// function sum(array) {
//   let itemLengths = [];
//   let sum = 0;
//   for (const item of array) {
//     if (typeof item === "string") {
//       itemLengths.push(item.length);
//     }
//     if (typeof item === "number") {
//       itemLengths.push(item);
//     }
//     if (typeof item === "boolean") {
//       itemLengths.push(!item ? 0 : 1);
//     }
//   }

//   for (let i = 0; i < itemLengths.length; i++) {
//     sum += itemLengths[i];
//   }
//   return sum;
// }

function sum(array) {
  let sum = 0;

  for (const item of array) {
    if (typeof item === "string") {
      sum += item.length;
    } else if (typeof item === "number") {
      sum += item;
    } else if (typeof item === "boolean") {
      sum += item ? 1 : 0;
    }
  }

  return sum;
}

console.log(sum(mixedArray)); // 2089

// Bonus: Write a function that calculates the greatest product of four
// numbers that is either horizontally or vertically in the array

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct(matrix) {
  // TODO:
}

module.exports = {
  maxOfTwoNumbers,
  findLongestWord,
  sumNumbers,
  averageWordLength,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  sum,
  greatestProduct,
};
