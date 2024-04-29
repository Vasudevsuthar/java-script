const myArr = [0, 1, 2, 3, 4, 5]; 
console.log(myArr);
console.log(typeof myArr); // Operator to get the data type of a variable
console.log(myArr[5]); // Accessing the element at index 5 of the array

const arr1 = [1, 2, 3, 4, 5];
arr1.push(6); // Method to add elements to the end of an array
console.log(arr1);
arr1.pop(); // Method to remove the last element from an array
console.log(arr1);
arr1.unshift(0); // Method to add elements to the beginning of an array
console.log(arr1);
arr1.shift(); // Method to remove the first element from an array
console.log(arr1);

const arr2 = [9, 8, 7, 6, 5, 4];
console.log(arr2.includes(1)); // Method to check if an array includes a certain element
console.log(arr2.includes(9)); // Method to check if an array includes a certain element
console.log(arr2.indexOf(9)); // Method to get the index of the first occurrence of a value in an array
console.log(arr2.indexOf(0)); // Method to get the index of the first occurrence of a value in an array

const arr3 = [1, 2, 3, 4, 5];
const testarr1 = arr3.slice(0,3); // Method to extract a section of an array and return a new array
console.log(testarr1);
console.log(arr3);
const testarr2 = arr3.splice(0,3); // Method to remove elements from an array and, if necessary, insert new elements in their place, returning the removed elements
console.log(testarr2);
console.log(arr3);
