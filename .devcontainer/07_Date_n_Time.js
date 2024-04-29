const myDate = new Date(); // Object of Date class
console.log(myDate);
console.log(myDate.toDateString()); // Method to convert date portion of Date object to a human-readable string
console.log(myDate.toISOString()); // Method to convert Date object to a string in ISO 8601 format
console.log(myDate.toJSON()); // Method to convert Date object to a string in JSON format
console.log(myDate.toLocaleDateString()); // Method to convert date portion of Date object to a human-readable string based on the locale
console.log(myDate.toLocaleString()); // Method to convert Date object to a human-readable string based on the locale
console.log(myDate.toLocaleTimeString()); // Method to convert time portion of Date object to a human-readable string based on the locale
console.log(myDate.toString()); // Method to convert Date object to a string
console.log(myDate.toTimeString()); // Method to convert time portion of Date object to a human-readable string
console.log(myDate.toUTCString()); // Method to convert Date object to a string, using UTC time zone
console.log(myDate.getTimezoneOffset()); // Method to get the difference in minutes between local time and UTC time


const newDate = new Date(2022, 0, 26, 12, 18); // Object of Date class with specified year, month, day, hour, and minute
console.log(newDate.toLocaleString()); // Method to convert Date object to a human-readable string based on the locale

const getDate = new Date(); // Object of Date class initialized with current date and time
console.log(getDate);
console.log(getDate.getDay()); // Method to get the day of the week (0-6, where 0 represents Sunday)
console.log(getDate.getMonth() + 1); // Method to get the month (0-11, where 0 represents January) and adding 1 to get the actual month number
console.log(getDate.getFullYear()); // Method to get the year

const myNewDate = new Date("04-29-2024"); // Object of Date class created from a string representation of the date
console.log(myNewDate.toLocaleString()); // Method to convert Date object to a human-readable string based on the locale
console.log(myNewDate.getTime()); // Method to get the numeric value corresponding to the time for the specified date according to universal time





