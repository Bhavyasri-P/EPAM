// Block Scope Example
function sports() {
    if (10 < 20) {
        let cricket = "virat";
        console.log(cricket); // Output in terminal
    }
    // console.log(cricket); // Uncommenting this will cause an error (let is block-scoped)
}
sports();

// Alert, Prompt, and Confirm (Not Supported in Node.js)
console.log("This is an Alert Message to User");

// Simulating prompt in Node.js (using readline)
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Please Enter Your Name: ", (userName) => {
    console.log("Hello, " + userName + "! Welcome to My Page.");

    readline.question("Are You a Woman? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === "yes") {
            readline.question("Please Enter Your Name: ", (name) => {
                console.log("Hello Madam " + name + ", Welcome to My Page!");
                readline.close();
            });
        } else {
            readline.question("Please Enter Your Name: ", (name) => {
                console.log("Hello Mr. " + name + ", Welcome to My Page!");
                readline.close();
            });
        }
    });
});