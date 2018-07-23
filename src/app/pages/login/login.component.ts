import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private route: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: [''],
      password: ['']
    });
  }

  login(model: FormGroup) {
    console.log(model);
    if (model.value.userName === 'admin' && model.value.password === 'admin') {
      this.route.navigate(['home']);
    } else {
      alert('Login Failed.Enter correct password');
    }

  }
}
