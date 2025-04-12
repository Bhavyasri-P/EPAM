// Enum for operators
enum Operator {
    Add = '+',
    Subtract = '-',
    Multiply = '*',
    Divide = '/'
  }
  
  // Function to perform calculation
  function calculate(num1: number, num2: number, operator: Operator): number | string {
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
  const a = 10;
  const b = 5;
  
  console.log(`Addition: ${calculate(a, b, Operator.Add)}`);
  console.log(`Subtraction: ${calculate(a, b, Operator.Subtract)}`);
  console.log(`Multiplication: ${calculate(a, b, Operator.Multiply)}`);
  console.log(`Division: ${calculate(a, b, Operator.Divide)}`);enum Operator {
  Add = '+',
  Subtract = '-',
  Multiply = '*',
  Divide = '/'
}

function calculate(num1: number, num2: number, operator: Operator): number | string {
  try {
    switch (operator) {
      case Operator.Add:
        return num1 + num2;
      case Operator.Subtract:
        return num1 - num2;
      case Operator.Multiply:
        return num1 * num2;
      case Operator.Divide:
        if (num2 === 0) {
          throw new Error("Division by zero");
        }
        return num1 / num2;
      default:
        throw new Error("Invalid operator");
    }
  } catch (error) {
    return error.message;
  }
}

const a = 10;
const b = 5;

console.log(`Addition: ${calculate(a, b, Operator.Add)}`);
console.log(`Subtraction: ${calculate(a, b, Operator.Subtract)}`);
console.log(`Multiplication: ${calculate(a, b, Operator.Multiply)}`);
console.log(`Division: ${calculate(a, b, Operator.Divide)}`);
console.log(`Division by zero: ${calculate(a, 0, Operator.Divide)}`);
console.log(`Invalid operator: ${calculate(a, b, 'Invalid' as Operator)}`);