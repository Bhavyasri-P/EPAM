// Function Example
function goodStart() {
    document.write("Hello! Welcome to Functions Concepts!<br>");
}
goodStart();
goodStart();
goodStart();

// Function Scope
var Apple = "red";
let Orange = "yellow";
const banana = "green";

function fruit() {
    var x = 100;
    let y = 200;
    const z = "Mahesh";
    document.write("<br>" + x);
    document.write("<br>" + y);
    document.write("<br>" + z);
}
fruit();

// Global Scope
function globalFruit() {
    document.write("<br>" + Apple);
    document.write("<br>" + Orange);
    document.write("<br>" + banana);
}
globalFruit();

// Conditional Statements
let clname = "III B.Tech CSE A1";
let cr = "xyz";
let game = "Cricket";

if (clname == "III B.Tech CSE A2") {
    document.write("<br>CR of the Class is: " + cr);
} else if (game == "Cricket") {
    document.write("<br>Captain of Cricket Team is Dhoni");
} else {
    document.write("<br>Invalid Input");
}