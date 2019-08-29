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

import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes =
[
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
    { path: 'students', component: StudentsComponent, canActivate: [AuthGuardService] },
    { path: 'events', component: EventsComponent, canActivate: [AuthGuardService] },
    { path: 'eventInfo', component: EventInfoComponent, canActivate: [AuthGuardService] },
    { path: 'academy', component: AcademyComponent, canActivate: [AuthGuardService] },
    { path: 'studentInfo', component: StudentInfoComponent, canActivate: [AuthGuardService] },
    { path: 'instructorInfo', component: InstructorInfoComponent, canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
