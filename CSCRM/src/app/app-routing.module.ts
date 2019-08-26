import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { UsersComponent } from './views/admin/users/users.component';
import { StudentsComponent } from './views/admin/students/students.component';
import { EventsComponent } from './views/admin/events/events.component';
import { AcademyComponent } from './views/admin/academy/academy.component';
import { StudentInfoComponent } from './views/student/student-info/student-info.component';
import { InstructorInfoComponent } from './views/student/instructor-info/instructor-info.component';
import { LoginComponent } from './views/shared/login/login.component';
import { EventInfoComponent } from './views/admin/event-info/event-info.component';

const routes: Routes =
[
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UsersComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'events', component: EventsComponent },
    { path: 'eventInfo', component: EventInfoComponent },
    { path: 'academy', component: AcademyComponent },
    { path: 'studentInfo', component: StudentInfoComponent },
    { path: 'instructorInfo', component: InstructorInfoComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
