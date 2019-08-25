import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private builder: FormBuilder) { }

  eventForm: FormGroup;
  ngOnInit() {
    this.eventForm = this.builder.group({
      EventType: ['', Validators.required],
      Description: ['', Validators.required],
      Schedule: ['', Validators.required],
      StartDate: [null, Validators.required],
      EndDate: [null, Validators.required],
      StartTime: ['', Validators.required],
      EndTime: ['', Validators.required],
      Location: ['', Validators.required],
      Capacity: ['', Validators.required],
      numAttending: ['', Validators.required],
    });
  }
}
