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
  console.log(`Division: ${calculate(a, b, Operator.Divide)}`);