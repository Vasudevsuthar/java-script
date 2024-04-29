// Data Type //
//* Two types of datatype => 1.Primitive 2.Reference *//

//Primitive //
// 1.Number => Represents both integer and floating-point numbers.
let a = 123;
console.log(typeof a);

//2.String => Represents textual data.
let b = "VasuDev"
console.log(typeof b);

//3.Boolean => Represents a logical entity having two values : 1.true n 2. false
let c = true;
let d = false;
console.log(typeof c);
console.log(typeof d);

//4.Undefined => Represents a variables that has been declared but not assigned a value.
let e;
console.log(typeof e);

//5.Null => Represent the intentional absence of any object value.

//6.Symbol => They can be used as identifiers for object properties.

//7.BigInt => This type provides a way to represent whole numbers latger than 2^53-1.



//Reference(Non Primitive) Data Type//
//1.Object => used to store collections of data and more complex entities.
let myObj = {
  name: "Vasudev",
  email: "vasudev@gmail.com"
}

//2.Array => used to store multiple value in a single variable.
let arr = [Ram, Hanuman, Bali];

//3.Function => 
const myFunction = function(){
   console.log("Hello World");
}
