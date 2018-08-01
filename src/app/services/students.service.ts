import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Student} from '../students/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  studentList: AngularFireList<any>;
  selectedStudent: Student = new Student();


  constructor(private firebase: AngularFireDatabase) { }

  getStudentList() {
    this.studentList = this.firebase.list('students');
    return this.studentList;
  }
  addStudent(student: Student): void {
    console.log(student);
    if (!this.studentList) {
      this.studentList = this.getStudentList();
    }
    this.studentList.push(student);
  }
  updateStudent(student: Student) {
    this.studentList.update(student.$key, {
      name: student.name,
      department: student.department,
      gender: student.gender,
      dob: student.dob,
      age: student.age
    });
  }
  deleteStudent($key: string) {
    this.studentList.remove($key);
  }
}
