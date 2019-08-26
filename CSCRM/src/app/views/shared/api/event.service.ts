import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  action: string;
  eventID: number;
  public actionValue: BehaviorSubject<string> = new BehaviorSubject<string>(
    this.action
  );
  public actionEventIDValue: BehaviorSubject<number> = new BehaviorSubject<number>(
    this.eventID
  );
  constructor(private dataService: DataService) {
    this.action = 'ListEvent';
    this.eventID = null;
  }
  public setAction(action: string, eventID: number) {
    this.actionValue.next(action);
    this.actionEventIDValue.next(eventID);
  }
  public addEvent(Event: any) {
    return this.dataService.post('Event/AddEvent', Event).toPromise();
  }
  public getListEvent() {
    return this.dataService.get('Event/ListEvent').toPromise();
  }
  public deleteEventID(id: number) {
    const eventID = 'Event/DeleteEvent/' + id;
    return this.dataService.delete(eventID).toPromise();
  }
  public updateEvent(Event: any) {
    return this.dataService.patch('Event/UpdateEvent', Event).toPromise();
  }
  public softDeleteEventID(id: number) {
    const eventID = 'Event/RemoveEvent/' + id;
    return this.dataService.softDelete(eventID).toPromise();
  }
}
