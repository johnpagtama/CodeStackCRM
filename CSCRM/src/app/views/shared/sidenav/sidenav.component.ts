import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    public adminPages =
    [
        {
            routerLink: 'dashboard',
            routerLinkActive: 'activeLink',
            linkText: 'Dashboard',
            linkIcon: 'fas fa-right-arrow'
        },

        {
            routerLink: 'users',
            routerLinkActive: 'activeLink',
            linkText: 'Users',
            linkIcon: 'fas fa-right-arrow'
        },

        {
            routerLink: 'students',
            routerLinkActive: 'activeLink',
            linkText: 'Students',
            linkIcon: 'fas fa-right-arrow'
        },

        {
            routerLink: 'events',
            routerLinkActive: 'activeLink',
            linkText: 'Events',
            linkIcon: 'fas fa-right-arrow'
        },

        {
            routerLink: 'academy',
            routerLinkActive: 'activeLink',
            linkText: 'Academy',
            linkIcon: 'fas fa-right-arrow'
        },

        {
            routerLink: 'login',
            linkText: 'Logout',
            linkIcon: 'fas fa-right-arrow'
        }
    ];

    public studentPages =
    [
        {
            routerLink: 'studentInfo',
            routerLinkActive: 'activeLink',
            linkText: 'Student Information',
            linkIcon: 'fas fa-right-arrow'
        },

        {
            routerLink: 'instructorInfo',
            routerLinkActive: 'activeLink',
            linkText: 'Instructor Information',
            linkIcon: 'fas fa-right-arrow'
        },

        {
            linkText: 'Logout',
            linkIcon: 'fas fa-right-arrow'
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
