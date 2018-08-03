import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import { StudentsService} from '../../services/students.service';
import {Student} from '../student.model';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  studentForm: FormGroup;
studentList: Student[];
  uploadedFiles = [];
  imageUrl;
  showImg = false;
  constructor(public studentService: StudentsService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.studentForm = this.fb.group({
      name: [''],
      fatherName: [''],
      dob: [''],
      gender: [''],
      idProof: [''],
      mobileNo: [''],
      email: [''],
      address: [''],
      image: ['']
    });
    const x = this.studentService.getStudentList();
    console.log(x);
    x.snapshotChanges().subscribe(item => {
      this.studentList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.studentList.push(y as Student);
      });
      console.log( this.studentList);
    });
  }
  addStudent(model: FormGroup) {
      this.studentService.addStudent(model.value);
    this.showImg = false;
    this.imageUrl = '';
    this.studentForm.reset();
    console.log('Submitted Succcessfully', 'Student Register');
  }

  onUpload(event) {
    console.log(event);
    this.studentForm.controls['image'].patchValue(event.files[0]);
    this.imageUrl = event.files[0].objectURL;
    if (this.imageUrl != null) {
      this.showImg = true;
    }
    console.log(this.imageUrl);
  }
  resetForm(model: FormGroup) {
    if (model != null) {
      this.studentForm.reset();
      this.showImg = false;
      this.imageUrl = '';
    }
  }
}
