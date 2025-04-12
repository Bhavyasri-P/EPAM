// Step 1: Define an array with sample values
const numbers = [5, 12, 8, 130, 44, 3, 21];

// Step 2: Create a function that takes an array and a callback filter condition
function filterArray(arr, conditionFn) {
  // Step 3: Use .filter() to apply the filtering condition
  const filtered = arr.filter(conditionFn);
  // Step 4: Return the filtered array
  return filtered;
}

// Step 5: Call the function with different filtering conditions

// Condition: Filter numbers greater than 10
const greaterThanTen = filterArray(numbers, (num) => num > 10);
console.log("Numbers > 10:", greaterThanTen);

// Condition: Filter even numbers
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// Condition: Filter numbers less than or equal to 5
const smallNumbers = filterArray(numbers, (num) => num <= 5);
console.log("Numbers <= 5:", smallNumbers);

// Condition: Filter numbers greater than 50
const greaterThanFifty = filterArray(numbers, (num) => num > 50);
console.log("Numbers > 50:", greaterThanFifty);

// Condition: Filter odd numbers
const oddNumbers = filterArray(numbers, (num) => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);

// Condition: Filter numbers between 10 and 50
const betweenTenAndFifty = filterArray(numbers, (num) => num >= 10 && num <= 50);
console.log("Numbers between 10 and 50:", betweenTenAndFifty);