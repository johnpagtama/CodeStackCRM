import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  action: string;
  studentID: number;
  public actionValue: BehaviorSubject<string> = new BehaviorSubject<string>(
    this.action
  );
  public actionStudentIDValue: BehaviorSubject<number> = new BehaviorSubject<number>(
    this.studentID
  );
  constructor(private dataService: DataService) {
    this.action = 'ListStudent';
    this.studentID = null;
  }
  public setAction(action: string, studentID: number) {
    this.actionValue.next(action);
    this.actionStudentIDValue.next(studentID);
  }
  public addStudent(Student: any) {
    return this.dataService.post('Student/AddStudent', Student).toPromise();
  }
  public getListStudent() {
    return this.dataService.get('Student/ListStudent').toPromise();
  }
  public deleteStudent(id: number) {
    const studentID = 'Student/DeleteStudent/' + id;
    return this.dataService.delete(studentID).toPromise();
  }
  public updateStudent(Student: any) {
    return this.dataService.patch('Student/UpdateStudent', Student).toPromise();
  }
  public softDeleteStudent(id: number) {
    const studentID = 'Student/RemoveStudent/' + id;
    return this.dataService.softDelete(studentID).toPromise();
  }
}
