// Task list array
var tasks = [];
// Add a new task
function addTask(title, description) {
    var newTask = {
        id: tasks.length + 1,
        title: title,
        description: description,
        status: "pending"
    };
    tasks.push(newTask);
    console.log("Task '".concat(title, "' added successfully."));
}
// Mark a task as completed
function completeTask(id) {
    var task = tasks.find(function (t) { return t.id === id; });
    if (task) {
        task.status = "completed";
        console.log("Task with ID ".concat(id, " marked as completed."));
    }
    else {
        console.log("Task with ID ".concat(id, " not found."));
    }
}
// Delete a task
function deleteTask(id) {
    var index = tasks.findIndex(function (t) { return t.id === id; });
    if (index !== -1) {
        var removedTask = tasks.splice(index, 1)[0];
        console.log("Task '".concat(removedTask.title, "' deleted."));
    }
    else {
        console.log("Task with ID ".concat(id, " not found."));
    }
}
// List all tasks
function listTasks() {
    if (tasks.length === 0) {
        console.log("No tasks to show.");
        return;
    }
    console.log("To-Do List:");
    tasks.forEach(function (task) {
        console.log("ID: ".concat(task.id, ", Title: ").concat(task.title, ", Description: ").concat(task.description, ", Status: ").concat(task.status));
    });
}
// Sample usage
addTask("Buy groceries", "Milk, Eggs, Bread");
addTask("Complete assignment", "TypeScript To-Do List assignment");
listTasks();
completeTask(2);
deleteTask(1);
listTasks();
