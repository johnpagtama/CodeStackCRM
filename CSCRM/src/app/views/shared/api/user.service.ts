import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  action: string;
  userID: number;
  public actionValue: BehaviorSubject<string> = new BehaviorSubject<string>(
    this.action
  );
  public actionUserIDValue: BehaviorSubject<number> = new BehaviorSubject<number>(
    this.userID
  );
  constructor(private dataService: DataService) {
    this.action = 'List';
    this.userID = null;
  }
  public setAction(action: string, userID: number) {
    this.actionValue.next(action);
    this.actionUserIDValue.next(userID);
  }
  public addUser(user: any) {
    return this.dataService.post('User/AddUser', user).toPromise();
  }
  public getListUser() {
    return this.dataService.get('User/ListUser').toPromise();
  }
  public deleteUserID(id: number) {
    const userID = 'User/DeleteUser/' + id;
    return this.dataService.delete(userID).toPromise();
  }
  public updateUser(user: any) {
    return this.dataService.patch('User/UpdateUser', user).toPromise();
  }
  public softDeleteUserID(id: number) {
    const userID = 'User/RemoveUser/' + id;
    return this.dataService.softDelete(userID).toPromise();
  }
}
