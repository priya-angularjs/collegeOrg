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
        icon: 'fa fa-fw fa-file-o',
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
        icon: 'fa fa-fw fa-edit',
        items: [
          {label: 'Undo', icon: 'fa fa-fw fa-mail-forward'},
          {label: 'Redo', icon: 'fa fa-fw fa-mail-reply'}
        ]
      },
      {
        label: 'Help',
        icon: 'fa fa-fw fa-question',
        items: [
          {
            label: 'Contents',
            icon: 'fa fa-fw fa-bars'
          },
          {
            label: 'Search',
            icon: 'fa fa-fw fa-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'File',
                icon: 'fa fa-fw fa-file',
              }
            ]}
        ]
      },
      {
        label: 'Actions',
        icon: 'fa fa-fw fa-gear',
        items: [
          {
            label: 'Edit',
            icon: 'fa fa-fw fa-refresh',
            items: [
              {label: 'Save', icon: 'fa fa-fw fa-save'},
              {label: 'Update', icon: 'fa fa-fw fa-save'},
            ]
          },
          {
            label: 'Other',
            icon: 'fa fa-fw fa-phone',
            items: [
              {label: 'Delete', icon: 'fa fa-fw fa-minus'}
            ]
          }
        ]
      }
    ];

  }
    signOut(): void {
      this.router.navigate(['/']);
  }
}
