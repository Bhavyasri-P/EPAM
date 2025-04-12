// Enum for operators
var Operator;
(function (Operator) {
    Operator["Add"] = "+";
    Operator["Subtract"] = "-";
    Operator["Multiply"] = "*";
    Operator["Divide"] = "/";
})(Operator || (Operator = {}));
// Function to perform calculation
function calculate(num1, num2, operator) {
    switch (operator) {
        case Operator.Add:
            return num1 + num2;
        case Operator.Subtract:
            return num1 - num2;
        case Operator.Multiply:
            return num1 * num2;
        case Operator.Divide:
            return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        default:
            return "Invalid operator";
    }
}
// Sample usage
var a = 10;
var b = 5;
console.log("Addition: ".concat(calculate(a, b, Operator.Add)));
console.log("Subtraction: ".concat(calculate(a, b, Operator.Subtract)));
console.log("Multiplication: ".concat(calculate(a, b, Operator.Multiply)));
console.log("Division: ".concat(calculate(a, b, Operator.Divide)));
