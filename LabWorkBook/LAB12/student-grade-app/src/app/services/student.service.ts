import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  clearStudents(): void {
    this.students = [];
  }
}