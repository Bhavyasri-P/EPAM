function calculateProfit() {
    // Step 1: Take User Input
    let initialAmount = parseFloat(document.getElementById("amount").value);
    
    // Step 2: Define Interest Rate
    const interestRate = 5; // 5% interest rate

    // Validate input
    if (isNaN(initialAmount) || initialAmount <= 0) {
        document.getElementById("result").innerHTML = "Please enter a valid amount.";
        return;
    }

    // Step 3: Calculate Profit
    let profit = (initialAmount * interestRate) / 100;
    let totalAmount = initialAmount + profit;

    // Step 4: Display the Result
    document.getElementById("result").innerHTML = `
        Initial Deposit: $${initialAmount.toFixed(2)}<br>
        Interest Rate: ${interestRate}%<br>
        Profit Earned: $${profit.toFixed(2)}<br>
        Total Amount: $${totalAmount.toFixed(2)}
    `;
}