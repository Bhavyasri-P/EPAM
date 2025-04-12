export default class Student {
    constructor(id, name, marks) {
      this.id = id;
      this.name = name;
      this.marks = marks;
      this.grade = this.calculateGrade();
    }
  
    calculateGrade() {
      if (this.marks >= 90) return 'A';
      else if (this.marks >= 80) return 'B';
      else if (this.marks >= 70) return 'C';
      else if (this.marks >= 60) return 'D';
      else return 'F';
    }
  }