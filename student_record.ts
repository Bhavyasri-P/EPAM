// Define the Student interface
interface Student {
    id: number;
    name: string;
    age: number;
    course: string;
  }
  
  // Sample students array
  let students: Student[] = [];
  
  // Create - Add a new student
  function addStudent(student: Student): void {
    students.push(student);
    console.log(`Student with ID ${student.id} added.`);
  }
  
  // Read - Display all students
  function displayStudents(): void {
    if (students.length === 0) {
      console.log("No student records found.");
      return;
    }
    console.log("Student Records:");
    students.forEach(student => {
      console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Course: ${student.course}`);
    });
  }
  
  // Update - Update a student's information
  function updateStudent(id: number, updatedInfo: Partial<Student>): void {
    const student = students.find(s => s.id === id);
    if (student) {
      Object.assign(student, updatedInfo);
      console.log(`Student with ID ${id} updated.`);
    } else {
      console.log(`Student with ID ${id} not found.`);
    }
  }
  
  // Delete - Remove a student
  function deleteStudent(id: number): void {
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
      students.splice(index, 1);
      console.log(`Student with ID ${id} deleted.`);
    } else {
      console.log(`Student with ID ${id} not found.`);
    }
  }
  
  // Sample operations
  addStudent({ id: 1, name: "Alice", age: 20, course: "Math" });
  addStudent({ id: 2, name: "Bob", age: 21, course: "Physics" });
  
  displayStudents();
  
  updateStudent(1, { age: 21, course: "Computer Science" });
  displayStudents();
  
  deleteStudent(2);
  displayStudents();// Define the Student interface
interface Student {
    id: number;
    name: string;
    age: number;
    course: string;
}

// Sample students array
let students: Student[] = [];

// Create - Add a new student
function addStudent(student: Student): void {
    if (!students.find(s => s.id === student.id)) {
        students.push(student);
        console.log(`Student with ID ${student.id} added.`);
    } else {
        console.log(`Student with ID ${student.id} already exists.`);
    }
}

// Read - Display all students
function displayStudents(): void {
    if (students.length === 0) {
        console.log("No student records found.");
        return;
    }
    console.log("Student Records:");
    students.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Course: ${student.course}`);
    });
}

// Read - Display a student by ID
function displayStudentById(id: number): void {
    const student = students.find(s => s.id === id);
    if (student) {
        console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Course: ${student.course}`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}

// Update - Update a student's information
function updateStudent(id: number, updatedInfo: Partial<Student>): void {
    const student = students.find(s => s.id === id);
    if (student) {
        Object.assign(student, updatedInfo);
        console.log(`Student with ID ${id} updated.`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}

// Delete - Remove a student
function deleteStudent(id: number): void {
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        students.splice(index, 1);
        console.log(`Student with ID ${id} deleted.`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}

// Sample operations
addStudent({ id: 1, name: "Alice", age: 20, course: "Math" });
addStudent({ id: 2, name: "Bob", age: 21, course: "Physics" });

displayStudents();

displayStudentById(1);

updateStudent(1, { age: 21, course: "Computer Science" });
displayStudents();

deleteStudent(2);
displayStudents();