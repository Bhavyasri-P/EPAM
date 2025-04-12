// Define the Task interface
interface Task {
    id: number;
    title: string;
    description: string;
    status: "pending" | "completed";
  }
  
  // Task list array
  let tasks: Task[] = [];
  
  // Add a new task
  function addTask(title: string, description: string): void {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      description,
      status: "pending"
    };
    tasks.push(newTask);
    console.log(`Task '${title}' added successfully.`);
  }
  
  // Mark a task as completed
  function completeTask(id: number): void {
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.status = "completed";
      console.log(`Task with ID ${id} marked as completed.`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }
  
  // Delete a task
  function deleteTask(id: number): void {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      const removedTask = tasks.splice(index, 1)[0];
      console.log(`Task '${removedTask.title}' deleted.`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }
  
  // List all tasks
  function listTasks(): void {
    if (tasks.length === 0) {
      console.log("No tasks to show.");
      return;
    }
  
    console.log("To-Do List:");
    tasks.forEach(task => {
      console.log(
        `ID: ${task.id}, Title: ${task.title}, Description: ${task.description}, Status: ${task.status}`
      );
    });
  }
  
  // Sample usage
  addTask("Buy groceries", "Milk, Eggs, Bread");
  addTask("Complete assignment", "TypeScript To-Do List assignment");
  
  listTasks();
  
  completeTask(2);
  
  deleteTask(1);
  
  listTasks();