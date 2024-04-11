const name = "vasudev";
const lastName = "Suthar";

console.log(`My name is ${name} and last name is ${lastName}`);

//**********methods************/

//1. key accesse //
console.log(name[2]);


//2. lenght //

console.log(name.length);

//3. at & charAt //

const sentence = 'Hello World I am Vasudev Suthar';
let index = 6;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
console.log(`An index of ${index} returns the character ${sentence.charAt(index)}`);


//4. concat //
const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(' ', str2));
console.log(str2.concat(' ', str1));


//5. endsWith //
const sentence1 = "This is endsWith method"
console.log(sentence1.endsWith('method', 23));


//6. includes //
const sentence2 = "This is includes method";
const word = "includes";

console.log(`The word ${word} ${sentence2.includes(word) ? "is" : "is not"} in the sentence`);


//7.indexOf //
const paragraph = "I have a Dell laptop, Dell laptop is the best";
const searchIndex = "Dell";
const indexOfFitst = paragraph.indexOf(searchIndex);
const indexOfSecond = paragraph.indexOf(searchIndex, indexOfFitst+1)
console.log(`The index of the First "${searchIndex}" is "${indexOfFitst}"`);

console.log(`The index of the Second "${searchIndex}" is "${indexOfSecond}"`);


//8. lastIndexOf //

console.log(`The last index of "${searchIndex} is "${paragraph.lastIndexOf(searchIndex)}`);


//9. localCompare //
const a = "vasudev";
const b = "VASUDEV";
console.log(a.localeCompare(b));


//10. match //
const paragraph1 = "The JavaScript is the most beautiful Language";
const regex = /[A-Z]/g;
const found = paragraph1.match(regex);
console.log(found);