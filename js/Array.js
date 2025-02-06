// Variable declaration and reassignment using var
var a = 10;
console.log(a);

var a = 20; // Redeclaring a variable with var (allowed)
console.log(a);

// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements
console.log(fruits[0]); // Output: Apple

// Adding an element to the end
fruits.push("Mango");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Mango"]

// Removing the last element
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Iterating through an array
fruits.forEach(fruit => console.log(fruit));

// Finding an element
console.log(fruits.includes("Banana")); // Output: true