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

const convertCelsiusToFahrenheit2 = celsius => celsius * 1.8 + 32;

//! ARRAYS
let item1 = 20;
let item2 = 30;
let item3 = 40;
let item4 = 50;
let item5 = 100;
//* instead of this we want to store the items in an array which is a single variable that can store multiple values

let itemArr = [20, 30, 40, 50, 100];

//? First & last element of array:
// console.log(itemArr[0]);
// console.log(itemArr[itemArr.length - 1]);

//? What about adding to an array?
//* in order to add to an array we use the push method
itemArr.push(200);
//* this will add 200 to the end of the array

// console.log(itemArr);

//todo filter method
//? itemArr.filter(() => {});

// this is a very similar syntax as an arrow function within the filter method
let newItemArr = itemArr.filter(item => {
  //   console.log(item);
});
// console.log(newItemArr);
// currently this will log all the items in the array but the filter method will return an empty array because there is no truthy value being returned to the filter method

//* let's test this by making all the iterations of the filter method return true
newItemArr = itemArr.filter(item => {
  //   console.log(item);
  return true;
});

//* let's return the item if it is less than or equal to 50
newItemArr = itemArr.filter(item => {
  //   console.log(item);
  return item <= 50;
});
// console.log(newItemArr);

//? Filter Exercise
/**
 * Filter out all the 'FAIL' elements in an array
 *
 * @example
 * ['A+', 'A', 'FAIL] => ['A+', 'A']
 * ['FAIL', 'FAIL', 'B'] => ['B']
 * ['FAIL'] => []
 *
 */
let grades = ['A+', 'A', 'FAIL'];

let passingGrades = grades.filter(grade => {
  return grade !== 'FAIL';
});
// console.log(passingGrades);

//? Filter exercise 2
// Filter out all the 'FAIL' elements in an array WITHOUT using the filter method
// create a new empty array called 'goodGrades' and add all the passing grades to it

let goodGrades = [];

for (let i = 0; i < grades.length; i++) {
  if (grades[i] !== 'FAIL') {
    goodGrades.push(grades[i]);
  }
}

// console.log(goodGrades);

//? Map Method
let mapArr = [1, 4, 9, 16];

let newMapArr = mapArr.map(element => 'dog');
// console.log(newMapArr);

//? Map Exercise
/**
 * Turn each element in an array of dollars into cents
 *
 * @example
 * [1,5,10,3] => [100, 500, 1000, 300]
 * [0, 10,20] => [0, 1000, 2000]
 *
 */

let mapDollars = [1, 5, 10, 3];
let mapCents = mapDollars.map(dollar => dollar * 100);
// console.log(mapCents);

//? let's do the same exercise without using the map method
let mapCents2 = [];
for (let i = 0; i < mapDollars.length; i++) {
  mapCents2.push(mapDollars[i] * 100);
}
// console.log(mapCents2);

//! Objects
//* let userFirstName = 'David';
//* let userLastName = 'Bragg';
//* let userDiscordId = 'David Bragg#0001';
//* let userSubscriptionStatus = 'Vip';

//? instead of storing all these values in separate variables we can store them in an object

let user = {
  username: 'David',
  email: 'david@frontendsimplified.com',
  subscriptionStatus: 'VIP',
  discordId: 'David Bragg#0001',
};

//? Accessing object properties
// console.log(user.username);
