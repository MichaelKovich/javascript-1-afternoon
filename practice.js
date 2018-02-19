//=========DO NOT TOUCH THIS CODE=========//
var greetingsEarthlings = { greeting, newGreeting, finalGreeting }
//============Continue below=============//


//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Create a function declaration called greeting that 
//accepts name as its only parameter.
//greeting should return the string "Hello, " 
//plus the value of the name parameter. 

function greeting(name) {
  return "Hello, " + name;
}

//////////////////PROBLEM 2////////////////////

//Rewrite the function greeting as a function expression.
//Name it newGreeting

var newGreeting = function(name) {
  return "Hello, " + name;
};

//////////////////PROBLEM 3////////////////////

//Rewrite the function greeting as an arrow function.
//Name it finalGreeting

var finalGreeting = name => {
  return "Hello, " + name;
};

//////////////////PROBLEM 4////////////////////  

//Create an array called groceries with the values 
//"apples", "milk", "eggs", "bread"
  
let groceries = ['apples', 'milk', 'eggs', 'bread'];

//Write a function called doubleCheck that takes in an array 
//as a parameter.

//If the array does not contain "chocolate", add "chocolate".
//doubleCheck should return the array.
  
let doubleCheck = (arr) => {
  var count = 0;
  arr.forEach(function(element) {
    if (element === 'chocolate') {
      count++;
    }
  })
  if (count > 0) {
  } else {
    arr.push('chocolate');
  }
  return arr;
};

//////////////////PROBLEM 5////////////////////  

//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color: (a string), age (a number),
//and goodBoy (a boolean).

let dog = {name: 'Peapod', color: 'Tabby', age: 5, goodBoy: true};

//...access the dog's name from the object and assign it to a 
//variable called devMountainClassPet.

let devMountainClassPet = dog.name;
    
//Add a method to dog called bark.
//The value of bark should be a function that returns the string "Woof woof"

dog.bark = () => {
  return 'Woof woof';
}
  
//Store the result of invoking the bark method in a variable called ruff

let ruff = dog.bark();

//////////////////PROBLEM 6////////////////////

//Write a function called looper that takes in an array. looper should declare
//a variable called mySum. looper should then loop through the array and check 
//each element. 

//If the element is odd, or if the element is greater than or equal to 100, add the element
//to mySum.

//Return mySum.

let looper = (arr) => {
  let mySum = 0;
  arr.forEach(function (element) {
    if ((element % 2 != 0) || (element >= 100)) {
      mySum += element;
    } else {
    }
  });
  return mySum;
};

//////////////////PROBLEM 7////////////////////

//Given the following function called math

function math(num1, num2, callback) {
  return callback(num1, num2)
}

//Write a function called add that takes in two parameters and 
//returns the result of adding them together.

let add = (num1, num2) => {
  return num1 + num2;
};
  
//Now invoke math, passing in the numbers 3 and 4, and your add function,
//storing the result in the variable mathSum

let mathSum = math(3, 4, add);

//////////////////PROBLEM 8////////////////////

//Write a function called invoker that takes in one paramter, a callback function. 
//invoker should return the result of invoking the callback.

function sampleCallbackOne() {
  return 'I am a callback function'
}

function sampleCallbackTwo() {
  return 'I am also a callback function'
}

let invoker = (cb) => {
  return cb();
};
  
//////////////////PROBLEM 9////////////////////

let duck = 'cute';

function bathroom () {
  let rubberDuck = 'squeaky';
  function bathtub() {
    let sailorDuck = 'nautical';
  }
}

function pond() {
  let realDuck = 'fluffy';
}

//Given the functions and variables above, edit the arrays 
//below to contain only the appropriate variable names 
//as strings

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ['duck'];


//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ['duck', 'sailorDuck', 'rubberDuck'];


//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ['duck', 'sailorDuck', 'rubberDuck'];


//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ['duck', 'realDuck'];

//////////////////PROBLEM 10////////////////////

//Create a function called outerFn which returns an anonymous 
//function which returns your name.

let outerFn = () => {
  return function() {
    return 'Michael Kovich';
  }
}; 

//Now save the result of invoking outerFn into a variable called innerFn.

let innerFn = outerFn();

//Now invoke innerFn and save the result to a variable called finalResult.

let finalResult = innerFn();
  