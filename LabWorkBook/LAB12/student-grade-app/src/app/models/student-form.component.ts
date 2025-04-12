import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html'
})
export class StudentFormComponent {
  student: Student = { name: '', id: 0, marks: 0 };

  constructor(private studentService: StudentService) {}

  addStudent() {
    this.studentService.addStudent({ ...this.student });
    this.student = { name: '', id: 0, marks: 0 };
  }
}