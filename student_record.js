// Sample students array
var students = [];
// Create - Add a new student
function addStudent(student) {
    students.push(student);
    console.log("Student with ID ".concat(student.id, " added."));
}
// Read - Display all students
function displayStudents() {
    if (students.length === 0) {
        console.log("No student records found.");
        return;
    }
    console.log("Student Records:");
    students.forEach(function (student) {
        console.log("ID: ".concat(student.id, ", Name: ").concat(student.name, ", Age: ").concat(student.age, ", Course: ").concat(student.course));
    });
}
// Update - Update a student's information
function updateStudent(id, updatedInfo) {
    var student = students.find(function (s) { return s.id === id; });
    if (student) {
        Object.assign(student, updatedInfo);
        console.log("Student with ID ".concat(id, " updated."));
    }
    else {
        console.log("Student with ID ".concat(id, " not found."));
    }
}
// Delete - Remove a student
function deleteStudent(id) {
    var index = students.findIndex(function (s) { return s.id === id; });
    if (index !== -1) {
        students.splice(index, 1);
        console.log("Student with ID ".concat(id, " deleted."));
    }
    else {
        console.log("Student with ID ".concat(id, " not found."));
    }
}
// Sample operations
addStudent({ id: 1, name: "Alice", age: 20, course: "Math" });
addStudent({ id: 2, name: "Bob", age: 21, course: "Physics" });
displayStudents();
updateStudent(1, { age: 21, course: "Computer Science" });
displayStudents();
deleteStudent(2);
displayStudents();
