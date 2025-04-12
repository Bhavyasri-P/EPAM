import * as readlineSync from 'readline-sync';

// Define User interface
interface User {
  username: string;
  password: string;
}

// Hardcoded list of users
const users: User[] = [
  { username: "alice", password: "pass123" },
  { username: "bob", password: "secret456" },
  { username: "charlie", password: "qwerty789" }
];

// Function to validate login
function login(username: string, password: string): boolean {
  return users.some(user => user.username === username && user.password === password);
}

// Ask for user input
const inputUsername = readlineSync.question("Enter username: ");
const inputPassword = readlineSync.question("Enter password: ", { hideEchoBack: true });

if (login(inputUsername, inputPassword)) {
  console.log("✅ Login successful. Welcome!");
} else {
  console.log("❌ Login failed. Invalid username or password.");
}