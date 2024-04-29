const score = 300;
console.log(score);

const balance = new Number(400);
console.log(balance);

console.log(balance.toString()); // Method to convert Number object to string

const authorNumber = 100
console.log(authorNumber.toFixed(2)); // Method to format a number with a fixed number of digits after the decimal point

const number = 26.548566;
console.log(number.toFixed(0));
console.log(number.toPrecision(4)); // Method to format a number with a specific precision


const totalMoney = 25000000;
console.log(totalMoney.toLocaleString("en-IN")); // Method to format a number with locale-specific formatting options

console.log(5+"5"); // Concatenation of two strings
console.log(5+5); // Addition of two numbers
console.log("5"+"5"); // Concatenation of two strings
console.log("5"+5); // Concatenation of a string and a number

console.log(5*"5"); // Multiplication of two numbers
console.log(5*5); // Multiplication of two numbers
console.log("5"*"5"); // Multiplication of two numbers after converting strings to numbers
console.log("5"*5); // Multiplication of a string and a number after converting string to a number

console.log(25/"5"); // Division of two numbers
console.log(25/5); // Division of two numbers
console.log("25"/"5"); // Division of two numbers after converting strings to numbers
console.log("25"/5); // Division of a string and a number after converting string to a number






/**************Math****************/


console.log(Math.abs(-4)); // Method to return the absolute value of a number
console.log(Math.round(4.4)); // Method to round a number to the nearest integer
console.log(Math.ceil(4.526)); // Method to round a number to the next largest integer
console.log(Math.floor(4.526)); // Method to round a number downwards to the nearest integer
console.log(Math.max(1,55,364)); // Method to find the maximum value among the given numbers
console.log(Math.min(1,55,364)); // Method to find the minimum value among the given numbers

console.log(Math.random()); // Method to generate a random floating-point number between 0 and 1
console.log(Math.floor((Math.random() * 10) + 1)); // Method to generate a random integer between two specified values

const min = 20;
const max = 50;
console.log(Math.floor(Math.random() * (max - min +1)) + min); // Method to generate a random integer between two specified values




