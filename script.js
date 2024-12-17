// 9 lesson
console.groupCollapsed("9 lesson");
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
console.groupEnd();

console.groupCollapsed("10 lesson");
// 10 lesson
function convertToUpperCase(wordToConvert) {
  return wordToConvert.toUpperCase();
}

console.log(convertToUpperCase("Labas"));

function extractSubstring(extractWord) {
  return extractWord.substring(2, 7);
}

console.log(extractSubstring("Sveikas pasauli"));

function capitalizeFirstLetter(text) {
  let words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  return words.join(" ");
}

console.log(capitalizeFirstLetter("labas rytas, pasauli!"));

const censorCurseWords = (text, curseWords) => {
  let censoredText = text;
  for (let i = 0; i < curseWords.length; i++) {
    const curseWord = curseWords[i];
    while (censoredText.includes(curseWord)) {
      censoredText = censoredText.replace(curseWord, "****");
    }
  }
  return censoredText;
};
console.log(
  censorCurseWords("This is a badword and another badword.", ["badword"])
);

// const milkPrice = 3.49;

// if (Number.isInteger(milkPrice)) {
//   alert("Centų nereikia")
// } else{
//   alert("Centų prireiks...")
// }

// const milkPrice = 3.677;

// if (Number.isInteger(milkPrice)) {
//   alert("Centų nereikia")
// } else{
//   alert("Centų prireiks...")
// }

// alert(milkPrice.toFixed(2))

const isLegalAge = true;

console.log(isLegalAge);
console.log(isLegalAge.toString());
console.groupEnd();

console.groupCollapsed("11 lesson");
function alertName(text) {
  alert(text);
}

function consoleName(text) {
  console.log(text);
}

function coreFunction(name, callback) {
  const capitalizedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  callback(capitalizedName);
}

coreFunction("peTras", consoleName);

const cars = ["BMW", "VW", "Audi"];

cars.forEach((car, index) => console.log(index + ":" + car));

let friends = ["petras", "jonas", "paulius", "aNtanas"];

let newNames = friends.map(
  (friendNames) =>
    friendNames.charAt(0).toUpperCase() + friendNames.slice(1).toLowerCase()
);
console.log(newNames);

let friendsAge = [12, 18, 24, 65, 42, 11, 78];

let filterAge = friendsAge.filter((x) => x >= 18);

console.log(filterAge);

let cities = ["Vilnius", "Kaunas", "Palanga", "Klaipėda"];

console.log(cities.find((letter) => letter.charAt(0) === "K"));

console.log(cities.some((v) => v.charAt(0) === v.charAt(0).toLowerCase()));

console.log(cities.every((v) => v.charAt(0) === v.charAt(0).toUpperCase()));
console.groupEnd();

console.groupCollapsed("12 lesson");
let friendsName = [
  "Beata",
  "Aidas",
  "Haris",
  "Dainius",
  "Eglė",
  "Fėja",
  "Gabija",
  "Cezar",
  "Jūratė",
  "Ieva",
  "Vaidotas",
  "Lina",
  "Marius",
  "Neringa",
  "Orestas",
  "Ugnė",
  "Rūta",
  "Zita",
  "Saras",
  "Tomas",
  "Paulina",
  "Kostas",
  "Wanda",
  "Xenia",
  "Yva",
];

friendsName.sort();
console.log(friendsName);

friendsName.sort((a, b) => b > a);
console.log(friendsName);

let numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];

numbers.sort((a, b) => b - a);
console.log(numbers);

let secondArray = [10, 5, 20, 4];
secondArray.sort((a, b) => b - a);
console.log(secondArray[0]);

const people = [
  {
    name: "Petras",
    age: "18",
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];

// console.log(people.filter((x) => x.age >= 18));
// console.log(people.filter((x) => x.age >= 18).map((person) => person.name));
// console.log(
//   people
//     .filter((x) => x.age >= 18)
//     .map((person) => person.name)
//     .sort()
// );

console.log(
  people
    .filter((x) => x.age >= 18)
    .map((person) => person.name)
    .sort()
);

const drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
];

function fn(items) {
  items.sort((a, b) => a.price - b.price);
  return {
    pigiausias: items[0].name,
    brangiausias: items[items.length - 1].name,
  };
}

console.log(fn(drinks));
console.groupEnd();

// 13 lesson

function addElement(array, item) {
  array.push(item);
  return array;
}

console.log(addElement([1, 2, 3], 4));

function mergeArrays(firstArray, secondArray) {
  const together = firstArray.concat(secondArray);
  return together;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

function addMultipleElements(array, ...elements) {
  return [...array, ...elements];
}

console.log(addMultipleElements([1, 2, 3], 4, 5, 6));

const doubleNumbers = (item) => item.map((number) => number * 2);
console.log(doubleNumbers([1, 2, 3]));

const findUnique = (arr) => [...new Set(arr)];
console.log(findUnique([1, 2, 2, 3, 4, 4, 5]));

let planTrip = (element) =>
  element.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  ) <= 200;

console.log(planTrip([30, 80, 90]));
console.log(planTrip([100, 85, 60]));

const optimizeQueue = (orders) =>
  orders.sort((a, b) => a.size - b.size).map((order) => order.id);
console.log(
  optimizeQueue([
    { id: 1, size: 5 },
    { id: 2, size: 3 },
    { id: 3, size: 8 },
  ])
);
