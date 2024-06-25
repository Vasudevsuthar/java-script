// Create a Symbol with description "hi"
const symble = Symbol("hi");

// Create a number 1 and convert it to a Number object (unnecessary in this case)
const num = Number(1);

// Define an object User with various properties, including computed properties using the Symbol and Number
const User = {
    name: "Vasudev",          // Regular string property
    DOB: "13/08/2001",        // Date of birth as a string
    [symble]: "Mysymble",     // Computed property using the Symbol as the key
    [num]: 2,                 // Computed property using the Number object as the key
    email: "vasu@gmail.com",  // Email property
    add: "Jodhpur",           // Address property
};

// Log the name property of User
console.log(User.name);  // Output: "Vasudev"

// Log the name property using bracket notation
console.log(User["name"]);  // Output: "Vasudev"

// Log the value of the property with the Symbol key
console.log(User[symble]);  // Output: "Mysymble"

// Change the name property of User
User.name = "Vasu";

// Log the updated name property
console.log(User.name);  // Output: "Vasu"

// Uncommenting the following line would freeze the User object, preventing modifications
// Object.freeze(User);

// Attempt to change the name property again (will fail silently if Object.freeze is enabled)
User.name = 'abc';

// Log the User object to see the changes
console.log(User);  // Output: The User object with name still "Vasu" if frozen, otherwise "abc"

// Add a new method func to User
User.func = function(){
    console.log("Hellow user");
}

// Call the newly added method
console.log(User.func());  // Output: "Hellow user"

// Add another method funcTwo to User
User.funcTwo = function(){
    console.log(`Hellow ${this.name}`);
}

// Call the funcTwo method
console.log(User.funcTwo());  // Output: "Hellow abc" (or "Vasu" if User was frozen)

// Create a new object users using an empty object literal
const users = {};

// Add properties to the users object
users.id = "1";         // Add id property
users.name = "firstUser"; // Add name property

// Log the users object
console.log(users);  // Output: { id: "1", name: "firstUser" }

// Define a nested object data
const data = {
    totalUser: 10,               // Total number of users
    regularUser: {               // Nested object for a regular user
        name: "someUser",
        age: "18",
        email: "some@gmail.com"
    }
}

// Log the nested regularUser object
console.log(data.regularUser);  // Output: { name: "someUser", age: "18", email: "some@gmail.com" }

// Define three separate objects
const obj1 = {1: "name"};
const obj2 = {2: "age"};
const obj3 = {3: "email"};

// Merge the objects into a new object obj4 using Object.assign
const obj4 = Object.assign({}, obj1, obj2, obj3);

// Merge the objects into a new object obj5 using spread syntax
const obj5 = {...obj1, ...obj2, ...obj3};

// Log the merged objects
console.log(obj4);  // Output: {1: "name", 2: "age", 3: "email"}
console.log(obj5);  // Output: {1: "name", 2: "age", 3: "email"}

// Define an array of user objects
const usersData = [
    {
        name: "user1",
    },
    {
        name: "user2",
    },
    {
        name: "user3",
    }
]

// Log the name of the second user in the array
console.log(usersData[1].name);  // Output: "user2"

// Log the keys of the User object
console.log(Object.keys(User));  // Output: ["name", "DOB", "1", "email", "add", "func", "funcTwo"]

// Log the values of the User object
console.log(Object.values(User));  // Output: ["abc", "13/08/2001", 2, "vasu@gmail.com", "Jodhpur", [Function: func], [Function: funcTwo]]

// Log the entries (key-value pairs) of the User object
console.log(Object.entries(User));  // Output: [["name", "abc"], ["DOB", "13/08/2001"], ["1", 2], ["email", "vasu@gmail.com"], ["add", "Jodhpur"], ["func", [Function: func]], ["funcTwo", [Function: funcTwo]]]

// Check if the User object has the property "isLoggedIn"
console.log(User.hasOwnProperty("isLoggedIn"));  // Output: false

// Check if the User object has the property "name"
console.log(User.hasOwnProperty("name"));  // Output: true
