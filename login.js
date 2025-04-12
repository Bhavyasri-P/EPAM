"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Hardcoded list of users
var users = [
    { username: "alice", password: "pass123" },
    { username: "bob", password: "secret456" },
    { username: "charlie", password: "qwerty789" }
];
// Function to validate login
function login(username, password) {
    return users.some(function (user) { return user.username === username && user.password === password; });
}
// Ask for user input
var inputUsername = readlineSync.question("Enter username: ");
var inputPassword = readlineSync.question("Enter password: ", { hideEchoBack: true });
if (login(inputUsername, inputPassword)) {
    console.log("✅ Login successful. Welcome!");
}
else {
    console.log("❌ Login failed. Invalid username or password.");
}
