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


//11. padEnd //

const line = "Hello world"
console.log(line.padEnd(15,"."));


//12. padStart //

const line2 = "5";
console.log(line2.padStart(2, "0"));


//13. repeate //
const hi = "Coder! ";
console.log(`I am a ${hi.repeat(3)}`);


//14. replace //
const line3 = "Vasu's laptop is faster then your laptop!";
console.log(line3.replace("Vasu's", 'My'));

//15. replaceAll //
console.log(line3.replaceAll("laptop", 'pc'));

//16. search //
const regex1 = /[^\w\s']/g;
console.log(line3.search(regex1));
console.log(line3[line3.search(regex1)]);


//17. slice //
console.log(line3.slice(29));
console.log(line3.slice(0, 23));
console.log(line3.slice(-7));
console.log(line3.slice(-17, -8));


//18. split //
const words = line3.split(" ");
console.log(words[5]);

const char = line3.split("");
console.log(char[10]);


//19. startsWith //
console.log(line3.startsWith("Vasu"));
console.log(line3.startsWith("Vasu", 5));


//20. substring //
console.log(line3.substring(7));
console.log(line3.substring(7, 13));

//21. toString //
const stringObj = new String("Hello");
console.log(stringObj);
console.log(stringObj.toString());


//22. trim, trimStart, trimEnd //
const trimObj = "    Hi everyone...     ";
console.log(trimObj.trim());
console.log(trimObj.trimStart());
console.log(trimObj.trimEnd());