const name = 'Ned';

//!just like arrays strings can be accessed by index, let's do an example in the console
// console.log(name[0]);

//!now let's print the lowercase d of the below string as an exercise
// console.log('Hello World'[10]);

//!for a more dynamic approach to the above example, we can use the length property of strings once it is stored in a variable
const greeting = 'Hello World';
// console.log(greeting[greeting.length - 1]);

//! If you are ever confused on the data type of a variable, you can use the typeof operator to check
// console.log(typeof 5);

//! Variables are used to store value, in programming it is importan to be descriptive of the value stored in a variable
/* For instance, if you have a variable that stores a name, you should name the variable name, if it stores a number, you should name the variable number, if it stores a boolean, you should name the variable isTrue or hasValue etc. 

This is important because it makes your code more readable and easier to understand for other developers who may work on your code in the future.
example:
let x = 5; // not descriptive
let age = 5; // descriptive
*/
let username = 'Ned Stark';

/* 
Converting Temperatures

Celius to Fahrenheit formula: 
F = C x 1.8 + 32

*/
let celius = 10;
let fahrenheit = celius * 1.8 + 32;
// console.log(fahrenheit);

//! CONDITIONAL OPERATOR

let subscribed = true;

if (subscribed === true) {
  //   console.log('show the video');
}

let cash = 45;
let price = 40;

if (cash >= price) {
  //   console.log(`you paid extra - here's ${cash - price} dollars change`);
} else if (cash === price) {
  //   console.log('you paid the exact amount, have a nice day!');
} else {
  //   console.log(`not enough money - you still owe ${price - cash} dollars`);
}

//! a cleaner way to is:
let difference = cash - price;
if (cash >= price) {
  //   console.log(`you paid extra - here's ${difference} dollars change`);
} else if (cash === price) {
  //   console.log('you paid the exact amount, have a nice day!');
} else {
  //   console.log(`not enough money - you still owe ${difference * -1} dollars`);
}

//! LOGICAL OPERATORS
// using the cash and price variables from above let's create a logical block that checks if the store is open and if we have enough cash to buy the item

let isStoreOpen = true;

//? AND operator
if (cash >= price && isStoreOpen) {
  //   console.log('print the receipt');
}

//! TERNARY OPERATOR
let hot = true;

// hot
//   ? console.log('weather is hot outside')
//   : console.log('weather is cold outside');

let loggedIn = true;

let str = subscribed && loggedIn ? 'show the video' : 'hide the video';

// console.log(str);

//? Ternary Exercise
// cash >= price && isStoreOpen
//   ? console.log('give receipt')
//   : console.log('Do not give receipt');

//? let's refactor the above code to make it more readable and cleaner so we are not console.logging multiple times

let receipt =
  cash >= price && isStoreOpen ? 'give receipt' : 'do not give receipt';
// console.log(receipt);

//! LOOPS
let countNoLoop = 1;
countNoLoop = countNoLoop + 1;

// console.log(countNoLoop);

//? While Loop
let count = 1;
while (count < 100) {
  count = count + 1;
  //   console.log(count);
}

//? For Loop
//* lets run the same function above in a for loop

for (let i = 1; i < 100; i++) {
  //   console.log(i + 1);
}

//? For Loop Exercise
/* Write a for-loop that loops through 1 to 20 
* if a number is divisible by 3, print "Frontend"
* if a number is divisible by 5, print "Simplified"
* if a number is divisible by 3 and 5, print "Frontend Simplified"
* if a number is not divisble by 3 or 5, print the number

* @example
* 1 -> 1
* 2 -> 2
* 3 -> Frontend
* 4 -> 4
* 5 -> Simplified
*...
* 15 -> Frontend Simplified
*20 -> Simplified
*/

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // console.log('Frontend Simplified');
  } else if (i % 3 === 0) {
    // console.log('Frontend');
  } else if (i % 5 === 0) {
    // console.log('Simplified');
  } else {
    // console.log(i);
  }
}

//? For Loop Exercise 2
/* Print out every character from the string:
* 'Frontend Simplified'

* @example
* 'F'
* 'r'
* 'o'
* ...
* 'e'
* 'd'

*/

const str2 = 'Frontend Simplified';

for (let i = 0; i < str2.length; i++) {
  //   console.log(str2[i]);
}

//! FUNCTIONS (function declaration)
// console.log('Welcome to FES, David');
// console.log('Welcome to FES, Zen');
// console.log('Welcome to FES, Mitri');

//todo DRY - Don't Repeat Yourself
//todo Functions are used to store a block of code that can be reused multiple times

function welcomePersonToFes(name) {
  //   console.log(`Welcome to Frontend Simplified, ${name}`);
}

welcomePersonToFes('David');
welcomePersonToFes('Zen');
welcomePersonToFes('Mitri');

function welcomePersonToFes2(firstName, lastName) {
  //   console.log(`Welcome to Frontend Simplified, ${firstName} ${lastName}`);
}

welcomePersonToFes2('David', 'Bragg');
welcomePersonToFes2('John', 'Doe');

function fn() {
  return 5;
  console.log('my function');
}

// fn();

function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}

// console.log(sumOfTwoNumbers(10, 10));

//? Function Exercise convertCelciusToFahrenheit
/*
Create a function that convert Celsius to Fahrenheit
*
Celsius to Fahrenheit formula:
* F = C x 1.8 + 32

* @example
* convertCelsiusToFahrenheit(0) -> 32
* convertCelsiusToFahrenheit(10) -> 50
* convertCelsiusToFahrenheit(30) -> 86

*/
function convertCelsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}
//
// console.log(convertCelsiusToFahrenheit(0));
// console.log(convertCelsiusToFahrenheit(10));
// console.log(convertCelsiusToFahrenheit(30));

//! ARROW FUNCTION

const convertCelsiusToFahrenheit2 = (celsius) => celsius * 1.8 + 32;
