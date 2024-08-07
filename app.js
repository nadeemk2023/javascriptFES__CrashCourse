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
  lessonsCompleted: [0, 1],
};

//? Accessing object properties
// console.log(user.username);

//? Now lets access the first letter of the username
// console.log(user.username[0]);

//? Now lets access information about the user's completion of lessons
// console.log(user.lessonsCompleted);

//* we can treat this just like an array and use higher order functions like map and filter on it
// console.log(user.lessonsCompleted.map(lesson => lesson + 1));

//? Now lets turn our object into an array of users
let users = [
  {
    username: 'David',
    email: 'david@frontendsimplified.com',
    subscriptionStatus: 'VIP',
    discordId: 'David Bragg#0001',
    lessonsCompleted: [0, 1],
  },
  {
    username: 'Mitri',
    email: 'mitri@frontendsimplified.com',
    subscriptionStatus: 'VIP',
    discordId: 'Mitri#0001',
    lessonsCompleted: [0, 1, 2, 3],
  },
  {
    username: 'Zen',
    email: 'Zen@frontendsimplified.com',
    password: 'zen123',
    subscriptionStatus: 'VIP',
    discordId: 'Zen#0001',
    lessonsCompleted: [0, 1, 2, 3],
  },
];

//? now that we have an array of user objects let's access the first user's lessons completed
// console.log(users[0].lessonsCompleted);

//? let's add some passwords to each user and then create a function to login a user

users[0].password = 'test123';
users[1].password = 'mitri123';

// function login(email, password) {
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].email === email && users[i].password === password) {
//       console.log('login successful');
//     }
//   }
// }

function login(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      if (users[i].password === password) {
        // console.log('login successful');
      } else {
        // console.log('incorrect password');
      }
      return;
    }
  }
  //   console.log(`Could not find email: ${email} in our records`);
}

login('david12@frontendsimplified.com', 'test123');
login('mitri@frontendsimplified.com', 'mitri123');

//? Object Exercise
/**
 * Create a register user function that accepts:
 * - username
 * - email
 * - password
 * - subscriptionStatus
 * - discordId
 * - lessonsCompleted
 *
 * Inside your register function:
 * 1. Create a user object
 * 2. Push this user object into the `users` array
 */

// function registerUser(
//   username,
//   email,
//   password,
//   subscriptionStatus,
//   discordId,
//   lessonsCompleted
// ) {
//   let newUser = {
//     username,
//     email,
//     password,
//     subscriptionStatus,
//     discordId,
//     lessonsCompleted,
//   };
//   users.push(newUser);
// }
//
// registerUser('Ned', 'ned123.com', 'ned123', 'VIP', 'Ned#0001', [0, 1]);

//? This is actually real bad practice because we have so many arguments in the function, it is hard to keep track of what each argument is for let's refactor it more effectively and make it more readable

function registerUser(user) {
  users.push(user);
}

registerUser({
  username: 'Ned',
  email: 'ned123.com',
  password: 'ned123',
  subscriptionStatus: 'VIP',
  discordId: 'Ned#0001',
  lessonsCompleted: [0, 1],
});

// console.log(users);

//! DOM (Document Object Model)
//? there's two ways of selecting the title element that we created in our html file

//? Method 1
// console.log(document.querySelector('#title'));

//? Method 2
// console.log(document.getElementById('title'));

//* Now let's change the text of the title element
document.querySelector('#title').innerHTML = 'Frontend Simplified';

//* Now let's change the CSS of an element on the page
// document.querySelector('#title').style.color = 'red';

//? DOM Exercise - creating a button and using a click listener to change the text of the title element

//* First things first, let's create a function that changes the color of our text on click and add the click listener to the button in the html file
function changeTitleToRed() {
  document.querySelector('#title').style.color = 'red';
}

//? Dark Theme Example FES
function toggleDarkMode() {
  document.querySelector('body').classList.toggle('dark-theme');
}
