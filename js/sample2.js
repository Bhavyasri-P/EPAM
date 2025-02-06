var a = "This is String Data Type";
console.log(a);

console.log(10, 20, 30);

let test = 10 > 20;
console.log(test);

alert("Hello"); // Will show a popup in the browser

let sampleView = "Hello";
console.log(sampleView);

// Creating an object
let person = {
    name: "John",
    age: 25,
    city: "New York"
};

// Accessing properties
console.log(person.name); // Output: John

// Modifying properties
person.age = 26;
console.log(person.age); // Output: 26

// Adding a new property
person.country = "USA";
console.log(person); 

// Looping through an object
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Checking if a property exists
console.log("city" in person); // Output: true