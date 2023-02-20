let loopsResult = document.querySelector(".loop-results");
let arraysResult = document.querySelector(".arr-result");
let questionsLoops = document.querySelector(".questions-loops");
let questionsArrays = document.querySelector(".questions-arrays");
let loopsQuestions = [
  "Write a JavaScript program that accept two integers and display the larger",
  "Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.",
  "Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.",
  "Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.",
  "Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.",
  "Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade",
  'Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"',
  `According to Wikipedia a happy number is defined by the following process :
  "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
  Write a JavaScript program to find and print the first 5 happy numbers.`,
  `Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor
  Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.`,
  `Write a JavaScript program to construct the following pattern, using a nested for loop`,
  `Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers`,
  `Write a JavaScript program to sum the multiples of 3 and 5 under 1000.`,
];
/*----------------------- Loops exercises--------------*/
let exer1 = () => {
  loopsResult.innerText = "";
  questionsLoops.innerText = loopsQuestions[0];
  let a = +prompt("Enter please first number", 1);
  let b = +prompt("Enter please second number", 2);
  loopsResult.innerText = `\nMax:${a > b ? a : b}`;
};

let exer2 = () => {
  loopsResult.innerText = "";
  questionsLoops.innerText = loopsQuestions[1];
  let a = +prompt("Enter please first number", 1);
  let b = +prompt("Enter please second number", 2);
  let c = +prompt("Enter please third number", 3);
  if (a * b * c < 0) {
    loopsResult.innerText = `The sign is: -`;
  } else {
    loopsResult.innerText = `The sign is: +`;
  }
};

let exer3 = () => {
  loopsResult.innerText = "";
  questionsLoops.innerText = loopsQuestions[2];
  let a = +prompt("Enter please first number", 5);
  let b = +prompt("Enter please second number", -2);
  let c = +prompt("Enter please second number", 3);
  let arr = [];
  let x;
  arr.push(a, b, c);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        x = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = x;
      }
    }
    if (arr[i] > arr[i + 1]) {
      x = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = x;
    }
  }
  loopsResult.innerText = `Soted array: [${arr}]`;
};

let exer4 = () => {
  loopsResult.innerText = "";
  questionsLoops.innerText = loopsQuestions[3];
  let strArray = prompt("Enter number to fill array", "12345");
  let arr = strArray.split("");
  let max = arr[0],
    result;
  for (let i = 0; i < arr.length; i++) {
    result = arr[i] > max ? (max = arr[i]) : max;
  }
  loopsResult.innerText = `The max number from array is: ${result}`;
};

let exer5 = () => {
  loopsResult.innerText = "";
  questionsLoops.innerText = loopsQuestions[4];
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let result;
  for (let i = 0; i < arr.length; i++) {
    result = arr[i] % 2 === 0 ? (result = "Even") : (result = "Odd");
    loopsResult.innerHTML += `${arr[i]}:${result}<br/>`;
  }
};

let exer6 = () => {
  loopsResult.innerText = "";
  questionsLoops.innerText = loopsQuestions[5];
  let student = [
    {
      id: 1,
      name: "David",
      grade: 80,
    },
    {
      id: 2,
      name: "Vinoth",
      grade: 77,
    },
    {
      id: 3,
      name: "Divya",
      grade: 88,
    },
    {
      id: 4,
      name: "Ishitha",
      grade: 95,
    },
    {
      id: 5,
      name: "Thomas",
      grade: 68,
    },
  ];
  let gradeSum = student.reduce((acc, value) => acc + value.grade, 0);
  let average = gradeSum / student.length;

  if (average < 60) {
    loopsResult.innerText = `The average is: ${average}\nThe grade is: F`;
  } else if (average < 70) {
    loopsResult.innerText = `The average is: ${average}\nThe grade is: D`;
  } else if (average < 80) {
    loopsResult.innerText = `The average is: ${average}\nThe grade is: C`;
  } else if (average < 90) {
    loopsResult.innerText = `The average is: ${average}\nThe grade is: B`;
  } else if (average < 100) {
    loopsResult.innerText = `The average is: ${average}\nThe grade is: A`;
  }
};

let exer7 = () => {
  loopsResult.innerText = "";
  questionsLoops.innerText = loopsQuestions[6];
  let lenght = 100;
  for (let i = 1; i <= lenght; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      loopsResult.innerText += `FizzBuzz:${i}\n`;
    } else if (i % 5 === 0) {
      loopsResult.innerText += `Buzz:${i}\n`;
    } else if (i % 3 === 0) {
      loopsResult.innerText += `Fizz:${i}\n`;
    }
  }
};

let exer8 = () => {
  loopsResult.innerText = "";
  questionsLoops.innerText = loopsQuestions[7];
  function checkFiveHappyNumbers(number) {
    let sum = 0;
    while (number > 0) {
      const digit = number % 10;
      sum += digit ** 2;
      number = Math.floor(number / 10);
    }
    return sum === 1 || (sum !== 4 && checkFiveHappyNumbers(sum));
  }
  let count = 0;
  let number = 1;
  while (count < 5) {
    if (checkFiveHappyNumbers(number)) {
      loopsResult.innerText += `${number},`;
      count++;
    }
    number++;
  }
};
let exer9 = () => {
  loopsResult.innerText = "";
  questionsLoops.innerText = loopsQuestions[8];
  for (let i = 100; i <= 999; i++) {
    let sum = 0;
    let num = i;
    while (num > 0) {
      let digit = num % 10;
      sum += Math.pow(digit, 3);
      num = Math.floor(num / 10);
    }
    if (sum === i) {
      loopsResult.innerText += ` ${i}\n`;
    }
  }
};
let exer10 = () => {
  loopsResult.innerText = "";
  questionsLoops.innerText = loopsQuestions[9];
  let starsHeight = +prompt("Please enter a number for height of starts", 6);
  let star;
  for (let i = 0; i < starsHeight; i++) {
    star = " ";
    for (let j = 0; j < i; j++) {
      star += "*";
    }
    loopsResult.innerText += ` ${star}\n`;
  }
};

let exer11 = () => {
  loopsResult.innerText = "";
  questionsLoops.innerText = loopsQuestions[10];
  function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
  let a = +prompt("Enter first number");
  let b = +prompt("Enter second number");
  loopsResult.innerText = `The result is: ${gcd(a, b)}`;
};

let exer12 = () => {
  loopsResult.innerText = "";
  questionsLoops.innerText = loopsQuestions[11];
  let sum = 0,
    result,
    lenght = 1000;
  for (let i = 0; i < lenght; i++) {
    result = i % 3 === 0 || i % 5 === 0 ? (sum += i) : result;
  }
  loopsResult.innerText = `The sum is: ${sum}`;
};

/*----------------------- arrays exercises--------------*/
let arraysQuestions = [
  "Write a JavaScript function to check whether an `input` is an array or not.",
  "Write a JavaScript function to clone an array.",
  "Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.",
  "Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.",
  "Write a simple JavaScript program to join all elements of the following array into a string.",
  "Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.",
  `Write a JavaScript program to sort the items of an array. Go to the editor
  Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
  Sample Output : -4,-3,1,2,3,5,6,7,8`,
  `Write a JavaScript program to find the most frequent item of an array. var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]; Sample Output :
  "row 0"
  " 1"
  " 2"
  " 1"
  " 24"
  "row 1"`,
  `Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.`,
  "Write a JavaScript program which prints the elements of the following array.",
  "Write a JavaScript program to find the sum of squares of a numeric vector.",
  "Write a JavaScript program to compute the sum and product of an array of integers.",
  "Write a JavaScript program to add items in an blank array and display the items.",
  "Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).",
];

exercise1 = () => {
  questionsArrays.innerText = "";
  questionsArrays.innerText = arraysQuestions[0];
  let num = prompt("Enter a numbers to fill array", "1 2 3");
  let arr = num.split("");
  if (Array.isArray(arr)) {
    arraysResult.innerText = `${true}`;
  } else {
    arraysResult.innerText = `${false}`;
  }
};

exercise2 = () => {
  questionsArrays.innerText = "";
  questionsArrays.innerText = arraysQuestions[1];
  let arr1 = [1, 2, 3, [4, 5]];
  let arr2 = [];
  for (let i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
  }

  arraysResult.innerText = `original array:[${arr1}]\ncopy array:[${arr2}]`;
};

exercise3 = () => {
  questionsArrays.innerText = "";
  questionsArrays.innerText = arraysQuestions[2];
  let n = +prompt("Enter a number of elements you want");
  let arr = [7, 9, 0, -2];
  let result = arr.slice(0, n);
  if (arr.length !== 0) {
    arraysResult.innerText = `[${result}]`;
  } else if (n < 0) {
    arraysResult.innerText = `${[]}`;
  } else if (n >= arr.length) {
    arraysResult.innerText = `[${arr}]`;
  } else {
    arraysResult.innerText = `${[]}`;
  }
};

exercise4 = () => {
  questionsArrays.innerText = "";
  questionsArrays.innerText = arraysQuestions[3];
  let n = +prompt("Enter a number of elements you want");
  let arr = [7, 9, 0, -2];
  if (n >= arr.length) {
    n = 4;
  }
  let result = arr.slice(arr.length - n, arr.length);
  if (arr.length !== 0) {
    arraysResult.innerText = `[${result}]`;
  } else if (n < 0) {
    arraysResult.innerText = `${[]}`;
  } else {
    arraysResult.innerText = `${[]}`;
  }
};

exercise5 = () => {
  questionsArrays.innerText = "";
  questionsArrays.innerText = arraysQuestions[4];
  myColor = ["Red", "Green", "White", "Black"];
  arraysResult.innerText = `${myColor.join()}\n${myColor.join(
    ","
  )}\n${myColor.join("+")}`;
};

exercise6 = () => {
  questionsArrays.innerText = "";
  questionsArrays.innerText = arraysQuestions[5];
  let stringNum = "025468";
  let newArr = [];
  let num = stringNum.split("");
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0 && num[i - 1] % 2 === 0) {
      newArr.push(`-${num[i]}`);
    } else {
      newArr.push(`${num[i]}`);
    }
  }
  arraysResult.innerText = `${newArr.join("")}`;
};

exercise7 = () => {
  questionsArrays.innerText = "";
  questionsArrays.innerText = arraysQuestions[6];
  let arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
  let x;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        x = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = x;
      }
    }
    if (arr[i] > arr[i + 1]) {
      x = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = x;
    }
  }
  arraysResult.innerText = `[${arr}]`;
};

exercise8 = () => {
  questionsArrays.innerText = "";
  questionsArrays.innerText = arraysQuestions[7];
  let array = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
  function findMostFrequentItem(arr) {
    let freqMap = {};
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      freqMap[item] = (freqMap[item] || 0) + 1;
    }

    let maxFreq = 0;
    let mostFrequentItem = null;
    for (let item in freqMap) {
      if (freqMap[item] > maxFreq) {
        maxFreq = freqMap[item];
        mostFrequentItem = item;
      }
    }

    return [mostFrequentItem, maxFreq];
  }
  let [mostFrequentItem, count] = findMostFrequentItem(array);
  arraysResult.innerText = `${mostFrequentItem}: ${count} times`;
};

exercise9 = () => {
  questionsArrays.innerText = "";
  questionsArrays.innerText = arraysQuestions[8];
  let str = prompt("Enter a string", "The Quick Brown Fox");
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase();
    } else if (arr[i] === arr[i].toLowerCase()) {
      arr[i] = arr[i].toUpperCase();
    }
  }
  arraysResult.innerText = `${arr.join("")}`;
};

exercise10 = () => {
  questionsArrays.innerText = "";
  questionsArrays.innerText = arraysQuestions[9];
  let arr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ];
  for (let i = 0; i < arr.length; i++) {
    arraysResult.innerText += `row - ${i} = [${arr[i]}]\n`;
  }
};
exercise11 = () => {
  questionsArrays.innerText = "";
  questionsArrays.innerText = arraysQuestions[10];
  let arr = [2, 5, 7, 2, 1];
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] ** 2;
  }
  arraysResult.innerText = `The result is:${result}`;
};

exercise12 = () => {
  questionsArrays.innerText = "";
  questionsArrays.innerText = arraysQuestions[11];
  let arr = [2, 5, 7, 2, 1];
  let sum = 0,
    multiple = 1;
  arr.forEach((elem) => {
    sum += elem;
    multiple *= elem;
  });

  arraysResult.innerText = `The sum is: ${sum}\nThe multiple is: ${multiple}`;
};

exercise13 = () => {
  questionsArrays.innerText = "";
  questionsArrays.innerText = arraysQuestions[12];
  let userInp = document.querySelector(".exercise13 input");
  let buttons = document.querySelectorAll(".exercise13 button");
  let exerc13 = document.querySelector(".exercise13");
  exerc13.style.display = "block";
  let h4 = document.createElement("h4");
  exerc13.append(h4);
  let userArray = [],
    count = 0;
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target && btn.classList.contains("add")) {
        userArray.push(userInp.value);
        userInp.value = "";
      } else if (
        e.target &&
        btn.classList.contains("display") &&
        userArray.length !== 0
      ) {
        for (let ele of userArray) {
          count++;
          h4.innerHTML += `
          Elements:${count - 1} = ${ele} <br/>
            `;
        }
      }
    });
  });
};

exercise14 = () => {
  questionsArrays.innerText = "";
  questionsArrays.innerText = arraysQuestions[13];
  let arr = [1, 1, 2, 2, 3, 3];
  let set = new Set(arr);
  let noDublicateArray = Array.from(set);

  arraysResult.innerText = `array before:[${arr}]\narray after:[${noDublicateArray}]`;
};
