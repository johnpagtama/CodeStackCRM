import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    faCoffee = faCoffee;

    @Output() currentRoute = new EventEmitter();

    public adminPages =
    [
        {
            routerLink: 'dashboard',
            routerLinkActive: 'activeLink',
            linkText: 'Dashboard',
            linkIcon: this.faCoffee
        },

        {
            routerLink: 'users',
            routerLinkActive: 'activeLink',
            linkText: 'Users',
            linkIcon: this.faCoffee
        },

        {
            routerLink: 'students',
            routerLinkActive: 'activeLink',
            linkText: 'Students',
            linkIcon: this.faCoffee
        },

        {
            routerLink: 'events',
            routerLinkActive: 'activeLink',
            linkText: 'Events',
            linkIcon: this.faCoffee
        },

        {
            routerLink: 'academy',
            routerLinkActive: 'activeLink',
            linkText: 'Academy',
            linkIcon: this.faCoffee
        },

        {
            routerLink: 'login',
            linkText: 'Logout',
            linkIcon: this.faCoffee
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

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        console.log(this.route);
        console.log(this.route['_routerState'].snapshot.url);
    }

}
