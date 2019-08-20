import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    faTachometerAlt = faTachometerAlt;
    faUser = faUser;
    faUserGraduate = faUserGraduate;
    faCalendarCheck = faCalendarCheck;
    faUniversity = faUniversity;
    faSignOutAlt = faSignOutAlt;

    @Output() currentRoute = new EventEmitter();

    public adminPages =
    [
        {
            routerLink: 'dashboard',
            routerLinkActive: 'activeLink',
            linkText: 'Dashboard',
            linkIcon: this.faTachometerAlt
        },

        {
            routerLink: 'users',
            routerLinkActive: 'activeLink',
            linkText: 'Users',
            linkIcon: this.faUser
        },

        {
            routerLink: 'students',
            routerLinkActive: 'activeLink',
            linkText: 'Students',
            linkIcon: this.faUserGraduate
        },

        {
            routerLink: 'events',
            routerLinkActive: 'activeLink',
            linkText: 'Events',
            linkIcon: this.faCalendarCheck
        },

        {
            routerLink: 'academy',
            routerLinkActive: 'activeLink',
            linkText: 'Academy',
            linkIcon: this.faUniversity
        },

        {
            routerLink: 'login',
            linkText: 'Logout',
            linkIcon: this.faSignOutAlt
        }
    ];

    public studentPages =
    [
        {
            routerLink: 'studentInfo',
            routerLinkActive: 'activeLink',
            linkText: 'Student Information',
            linkIcon: this.faUserGraduate
        },

        {
            routerLink: 'instructorInfo',
            routerLinkActive: 'activeLink',
            linkText: 'Instructor Information',
            linkIcon: this.faUser
        },

        {
            linkText: 'Logout',
            linkIcon: this.faSignOutAlt
        }
    ];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        console.log(this.route);
        // tslint:disable-next-line: no-string-literal
        console.log(this.route['_routerState'].snapshot.url);
    }

}
