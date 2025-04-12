// Task 1: Click Event
document.getElementById("clickButton").addEventListener("click", function() {
    console.log("Button clicked!");
    document.getElementById("clickMessage").textContent = "Button was clicked!";
});

// Task 2: Mouseover Event
document.getElementById("mouseoverBox").addEventListener("mouseover", function() {
    console.log("Mouse is over the box!");
    document.getElementById("mouseoverMessage").textContent = "You hovered over the box!";
});

// Task 3: Keyup Event
document.getElementById("keyupInput").addEventListener("keyup", function() {
    console.log("Key pressed in input field!");
    document.getElementById("keyupMessage").textContent = "You typed: " + this.value;
}); 