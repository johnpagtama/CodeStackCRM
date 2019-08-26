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
  public actionuserIDValue: BehaviorSubject<number> = new BehaviorSubject<
    number
  >(this.userID);
  constructor(private dataService: DataService) {
    this.action = 'List';
    this.userID = null;
  }
  public setAction(action: string, userID: number) {
    this.actionValue.next(action);
    this.actionuserIDValue.next(userID);
  }
  public insertUser(user: any) {
    return this.dataService.post('user/Insert', user).toPromise();
  }
  public getList() {
    return this.dataService.get('User/List').toPromise();
  }
  public deleteuserID(id: number) {
    const userID = 'User/Delete/' + id;
    return this.dataService.delete(userID).toPromise();
  }
}
