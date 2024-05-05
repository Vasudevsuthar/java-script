const myArray = [1, 2, 3, 4, 5, 6];
console.log(myArray.at(5)); // Method to return the element at a specified index in an array

const arrayPart1 = ["Vasudev", "Hitesh", "Rajesh"];
const arrayPart2 = ["Arun", "Pankaj"];
const subArray = arrayPart1.concat(arrayPart2); // Method to merge two or more arrays and return a new array
console.log(subArray);

arrayPart1.push(arrayPart2); // Method to add one or more elements to the end of an array
console.log(arrayPart1);

const subArray1 = [...myArray, ...arrayPart2]; // Spread operator to merge two arrays into a new array
console.log(subArray1);

const result = arrayPart1.filter((arrayPart1) => arrayPart1.length >= 6); // Method to create a new array with all elements that pass the test implemented by the provided function
console.log(result);

const array = [1, 2, [3, 4], 5, [6, 7, [8, 9]]];
console.log(array.flat(Infinity)); // Method to recursively flatten a nested array

console.log(arrayPart1.join()); // Method to join all elements of an array into a string
console.log(arrayPart1.join("")); // Method to join all elements of an array into a string with no separator
console.log(arrayPart1.join("-")); // Method to join all elements of an array into a string with a specified separator

console.log(myArray.reverse()); // Method to reverse the order of the elements in an array

const week = [8, 4, 5, 6, 7, 2, 1, 3, 9];
console.log(week.sort()); // Method to sort the elements of an array in place and return the sorted array

console.log(Array.isArray("Vasudev")); // Static method to check if a value is an array
console.log(Array.from("Vasudev")); // Static method to create a new, shallow-copied Array instance from an array-like or iterable object

const a = 1;
const b = 2;
const c = 3;

console.log(Array.of(a, b, c)); // Static method to create a new Array instance with a variable number of arguments
