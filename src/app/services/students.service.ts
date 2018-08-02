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
  updateStudent(student) {
    console.log(student);
    this.studentList.update(student.$key, {
      name: student.updateName,
      fatherName: student.updateFatherName,
      dob: student.updateDob,
      gender: student.updateGender,
      idProof: student.updateIdProof,
      mobileNo: student.updateMobileNo,
      email: student.updateEmail,
      address: student.updateAddress,
      image: student.updateImage,
    });
  }
  deleteStudent($key: string) {
    this.studentList.remove($key);
  }
}
