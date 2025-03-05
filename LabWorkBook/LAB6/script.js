function filterEvenNumbers() {
    // Get input value and convert it into an array
    let input = document.getElementById("numberInput").value;
    
    // Convert input string to an array of numbers
    let numbers = input.split(',').map(num => parseInt(num.trim()));

    // Validate input
    if (numbers.some(isNaN)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers separated by commas.";
        return;
    }

    // Filter even numbers
    let evenNumbers = numbers.filter(num => num % 2 === 0);

    // Display result
    document.getElementById("result").innerHTML = "Even Numbers: " + (evenNumbers.length > 0 ? evenNumbers.join(', ') : "None");
}