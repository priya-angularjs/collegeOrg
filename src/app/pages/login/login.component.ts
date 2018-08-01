import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider, LinkedInLoginProvider} from 'angularx-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private route: Router,
              private authService: AuthService) {
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
      this.route.navigate(['home/dashboard']);
    } else {
      alert('Login Failed.Enter correct password');
    }

  }
 /* public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'linkedin') {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
      console.log('called');
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + 'sign in data : ' , userData);
        this.route.navigate(['home/dashboard']);
        // Now sign-in with userData
        // ...

      }
    );
  }*/
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((response) => {
      this.route.navigate(['home/dashboard']);
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((response) => {
      this.route.navigate(['home/dashboard']);
    });

    /*  signInWithLinkedIn(): void {
        this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID).then((response) => {
      });*/
  }
  signOut(): void {
    this.authService.signOut();
  }
}
