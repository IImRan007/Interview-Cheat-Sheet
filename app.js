// Finding largest number in array

// var array = [3, 6, 2, 56, 32, 5, 89, 32];
// var largest = 0;

// for (i = 0; i <= largest; i++) {
//   if (array[i] > largest) {
//     var largest = array[i];
//   }
// }

// console.log(largest);

// Finding middle element

// var arr = [1, 2, 3, 4, 5];

// console.log(arr[Math.floor(arr.length / 2)]);

// Finding minimum number

// const arr = [1, 2, 3, 4, 5];
// const min = Math.min(...arr);
// console.log(min);

// Reverse Array

// let numbers = [1, 2, 3, 4, 5];
// let reversedNumbers = [];

// for (let i = numbers.length - 1; i >= 0; i--) {
//   reversedNumbers.push(numbers[i]);
// }

// console.log(reversedNumbers);

// Sorting Array

// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers);

// Empty array

// var array1 = [1, 22, 24, 46];
// while (array1.length > 0) {
//   array1.pop();
// }

// console.log(array1);

// Removing duplicates from array

// let animals = ["Lion", "Rabbit", "Mouse", "Monkey", "Lion", "Ape"];
// let unique = [];
// animals.forEach((item) => {
//   if (!unique.includes(item)) {
//     unique.push(item);
//   }
// });
// console.log(unique);

// Reverse String
// Using split() reverse() and join()

// function reverseString(str) {
//   console.log(str.split("").reverse().join(""));
// }
// reverseString("hello");

// Using for loop

// function reverseString(str) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   console.log(newString);
// }
// reverseString("hello");

// Finding longest word in a string

// function findLongestWord(str) {
//   var strSplit = str.split(" ");
//   var longestWord = 0;
//   for (var i = 0; i < strSplit.length; i++) {
//     if (strSplit[i].length > longestWord) {
//       longestWord = strSplit[i].length;
//     }
//   }
//   console.log(longestWord);
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

var arr = [5, 2, 9, 5, 7];
var smallest = arr[0];

for (var i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}

console.log(smallest);
