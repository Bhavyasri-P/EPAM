function reverseNumber(num) {
    // Convert the number to a string and handle negative sign
    let isNegative = num < 0;
    let reversedStr = Math.abs(num).toString().split('').reverse().join('');
    
    // Convert back to number and restore sign
    let reversedNum = parseInt(reversedStr, 10);
    return isNegative ? -reversedNum : reversedNum;
}

// Function to get input value and display the reversed number
function reverseInputNumber() {
    let input = document.getElementById("numberInput").value;
    let reversed = reverseNumber(parseInt(input, 10));
    document.getElementById("result").textContent = reversed;
}