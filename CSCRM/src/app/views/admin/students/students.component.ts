import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSelect, MatSort, MatTableDataSource} from '@angular/material';

export interface Status {
    value: string;
    viewValue: string;
}

export interface UserData {
    id: string;
    name: string;
    progress: string;
    status: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
    // public students: any = [];

    // constructor() {
    //     this.students =
    //     [
    //         {
    //             firstName: 'John',
    //             lastName: 'Pagtama',
    //             fullName:  'John Pagtama',
    //             schoolYear: '2018-2019',
    //             status: 'current',
    //             email: 'jpagtama@codestack.co',
    //             phone: '2098985230'
    //         },

    //         {
    //             firstName: 'Daniel',
    //             lastName: 'Hana',
    //             fullName:  'Daniel Hana',
    //             schoolYear: '2018-2019',
    //             status: 'current',
    //             email: 'dhana@codestack.co',
    //             phone: '2098985230'
    //         },

    //         {
    //             firstName: 'Francisco',
    //             lastName: 'Cruz',
    //             fullName:  'Francisco Cruz',
    //             schoolYear: '2018-2019',
    //             status: 'current',
    //             email: 'fcruz@codestack.co',
    //             phone: '2098985230'
    //         },

    //         {
    //             firstName: 'Thomas',
    //             lastName: 'Huante',
    //             fullName:  'Thomas Huante',
    //             schoolYear: '2018-2019',
    //             status: 'current',
    //             email: 'thuante@codestack.co',
    //             phone: '2098985230'
    //         },

    //         {
    //             firstName: 'Jose',
    //             lastName: 'Cabral',
    //             fullName:  'Jose Cabral',
    //             schoolYear: '2018-2019',
    //             status: 'current',
    //             email: 'jcabral@codestack.co',
    //             phone: '2098985230'
    //         },

    //         {
    //             firstName: 'Joseph',
    //             lastName: 'Obligar',
    //             fullName:  'Joseph Obligar',
    //             schoolYear: '2018-2019',
    //             status: 'current',
    //             email: 'jobligar@codestack.co',
    //             phone: '2098985230'
    //         },

    //         {
    //             firstName: 'Anthony',
    //             lastName: 'Mannor',
    //             fullName:  'Anthony Mannor',
    //             schoolYear: '2018-2019',
    //             status: 'current',
    //             email: 'amannor@codestack.co',
    //             phone: '2098985230'
    //         },

    //         {
    //             firstName: 'Matthew',
    //             lastName: 'Hicks',
    //             fullName:  'Matthew Hicks',
    //             schoolYear: '2018-2019',
    //             status: 'current',
    //             email: 'mhicks@codestack.co',
    //             phone: '2098985230'
    //         },

    //         {
    //             firstName: 'Arisabeth',
    //             lastName: 'Simphoukham',
    //             fullName:  'Arisabeth Simphoukham',
    //             schoolYear: '2018-2019',
    //             status: 'current',
    //             email: 'asimphoukham@codestack.co',
    //             phone: '2098985230'
    //         },

    //         {
    //             firstName: 'Branton',
    //             lastName: 'James-Allen',
    //             fullName:  'Branton James-Allen',
    //             schoolYear: '2018-2019',
    //             status: 'current',
    //             email: 'ballen@codestack.co',
    //             phone: '2098985230'
    //         },

    //         {
    //             firstName: 'Lincoln',
    //             lastName: 'MacKay',
    //             fullName:  'Lincoln MacKay',
    //             schoolYear: '2018-2019',
    //             status: 'current',
    //             email: 'lmackay@codestack.co',
    //             phone: '2098985230'
    //         }
    //     ];
    // }

    // ngOnInit() {
    // }

    status: Status[] = [
        {value: 'All', viewValue: 'All'},
        {value: 'Current', viewValue: 'Current'},
        {value: 'Probation', viewValue: 'Probation'},
        {value: 'Terminated', viewValue: 'Terminated'},
        {value: 'Alumni', viewValue: 'Alumni'}
    ];

    displayedColumns = ['id', 'name', 'progress', 'status'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: false }) sort: MatSort;

    constructor() {
        // Create 100 users
        const users: UserData[] = [];
        for (let i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
        }

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }

    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    // tslint:disable-next-line: use-lifecycle-interface
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    ngOnInit() {

    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    statusFilter(value: string) {
        value === 'All' ? this.dataSource.filter = '' : this.dataSource.filter = value;
    }
}

    /** Builds and returns a new User. */
function createNewUser(id: number): UserData {
    const name =
        // tslint:disable-next-line: no-use-before-declare
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        // tslint:disable-next-line: no-use-before-declare
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
        id: id.toString(),
        name,
        progress: Math.round(Math.random() * 100).toString(),
        // tslint:disable-next-line: no-use-before-declare
        status: STATUS[Math.round(Math.random() * (STATUS.length - 1))]
    };
    }

    /** Constants used to fill up our data base. */
const STATUS = ['Current', 'Probation', 'Terminated', 'Alumni'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];




