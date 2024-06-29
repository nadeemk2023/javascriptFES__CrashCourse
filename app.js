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
