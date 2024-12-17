// 9 lesson

function convertMStoKMH(speed) {
  return speed * 3.6;
}

console.log(convertMStoKMH(10));

function compareNumber(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return firstNumber;
  }
  if (firstNumber < secondNumber) {
    return secondNumber;
  }

  if (firstNumber === secondNumber) {
    return "equal";
  }

  if (firstNumber !== secondNumber) {
    return "Error: most arguments must be numbers";
  }
}

console.log(compareNumber(4, 7));
console.log(compareNumber(5, 5));
console.log(compareNumber("5", 5));

function isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) return true;
  else {
    return false;
  }
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2021));
console.log(isLeapYear(2022));
console.log(isLeapYear(2023));
console.log(isLeapYear(2024));

function findMaxInArray(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMaxInArray([1, 3, 2, 5, 4]));
console.log(findMaxInArray([-1, -3, -2, -5, -4]));

// function sumArray(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// console.log(sumArray([1, 2, 3, 4, 5]));

const sumArray = (array) => {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

console.log(sumArray([1, 2, 3, 4, 5]));

const areArraysEqual = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};
console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(areArraysEqual([1, 2, 3], [1, 2, 4]));

function reverseString(word) {
  return word.split("").reverse().join("");
}
console.log(reverseString("Labas"));

const isPalindrome = (palindrome) => {
  const palindromeValue = palindrome.split("");
  const palindromeRever = palindromeValue.reverse();
  const palindromeString = palindromeRever.join("");
  if (palindromeString === palindrome) {
    return true;
  }
  return false;
};

console.log(isPalindrome("savas"));
console.log(isPalindrome("svetimas"));

const printPyramid = (height) => {
  for (let i = 1; i <= height; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += i;
    }
    console.log(line);
  }
};

console.log(printPyramid(3));
