import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { StudentsService} from '../../services/students.service';
import { Student} from '../student.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[] = ['image','name','fatherName','dob','gender','idProof','mobileNo','email','address','select'];
  studentList = [];
  selection = new SelectionModel<any>(true, []);
  studentDialog = false;
  selectedRowIndex = -1;
  studentListForm: FormGroup;
  imageUrl;
  studentDetails = [];
  /** Whether the number of selected elements matches the total number of rows. */


  applyFilter(filterValue: string) {
    this.studentList[0].filter = filterValue.trim().toLowerCase();
  }
  constructor(private studentsService: StudentsService, private fb: FormBuilder,
              public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.studentListForm = this.fb.group({
      $key: [''],
      updateName: [''],
      updateFatherName: [''],
      updateDob: [''],
      updateGender: [''],
      updateIdProof: [''],
      updateMobileNo: [''],
      updateEmail: [''],
      updateAddress: [''],
      updateImage: ['']
    });
    const studentData = this.studentsService.getStudentList();
    studentData.snapshotChanges().subscribe(item => {
      this.studentList = [];
      console.log(item);
      item.forEach(element => {
        console.log(element);
        const student = element.payload.toJSON();
        student['$key'] = element.key;
        this.studentList.push(student as Student);
        // console.log(element.payload.toJSON());
      });
    });
  }
    isAllSelected() {

      const numSelected = this.selection.selected.length;
      const numRows = this.studentList.length;
      console.log(numRows);
      return numSelected === numRows;
    }
    selectRow (row) {
      this.selection.toggle(row);
      this.studentDialog = true;
      console.log(row);
      this.selectedRowIndex = row.$key;
      this.studentListForm.controls['$key'].patchValue(row.$key);
      this.studentListForm.controls['updateName'].patchValue(row.name);
      this.studentListForm.controls['updateFatherName'].patchValue(row.fatherName);
      this.studentListForm.controls['updateDob'].patchValue(row.dob);
      this.studentListForm.controls['updateGender'].patchValue(row.gender);
      this.studentListForm.controls['updateIdProof'].patchValue(row.idProof);
      this.studentListForm.controls['updateMobileNo'].patchValue(row.mobileNo);
      this.studentListForm.controls['updateEmail'].patchValue(row.email);
      this.studentListForm.controls['updateAddress'].patchValue(row.address);
      this.imageUrl = row.image.objectURL;
      this.studentListForm.controls['updateImage'].patchValue(this.imageUrl);
    }
  updateStudent(model: FormGroup) {
    console.log(model.value);
    this.studentsService.updateStudent(model.value);
    console.log('Submitted Succcessfully', 'Student Register');
  }
  deleteStudent(model: FormGroup) {
    console.log(model.value);
    this.studentsService.deleteStudent(model.value.$key);
    this.studentDialog = false;
  }
  sanitizerUrl(imgUrl) {
    console.log("tet");
    // this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(imgUrl);
  }
}
