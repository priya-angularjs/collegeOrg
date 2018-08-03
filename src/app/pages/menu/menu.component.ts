import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AuthService} from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import {Router} from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private router: Router) {


  }

  ngOnInit() {
    this.items = [
      {
        label: 'Students',
        // icon: 'fa fa-fw fa-file-o',
        items: [{
          label: 'Add Student',
           icon: 'fa fa-fw fa-plus',
          routerLink: 'students/addStudent'
        },
          {label: 'View Students List',
             icon: 'fa fa-fw fa-external-link',
          routerLink: 'students/studentsList'},
        ]
      },
      {
        label: 'Edit',
        // icon: 'fa fa-fw fa-edit',
        items: [
          {label: 'Undo', icon: 'fa fa-fw fa-mail-forward'},
          {label: 'Redo', icon: 'fa fa-fw fa-mail-reply'}
        ]
      },
      {
        label: 'Help',
        // icon: 'fa fa-fw fa-question',
        items: [
          {label: 'Undo', icon: 'fa fa-fw fa-mail-forward'},
          {label: 'Redo', icon: 'fa fa-fw fa-mail-reply'}
        ]
      },
      {
        label: 'Actions',
        // icon: 'fa fa-fw fa-gear',
        items: [
          {label: 'Undo', icon: 'fa fa-fw fa-mail-forward'},
          {label: 'Redo', icon: 'fa fa-fw fa-mail-reply'}
        ]
      }
    ];

  }
    signOut(): void {
      this.router.navigate(['/']);
  }
}
