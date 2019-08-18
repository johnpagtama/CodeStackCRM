import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
    public events: any = [];

    constructor() {
        this.events =
        [
            {
                eventName: 'Code Stack Assessment',
                eventType: 'Assessment',
                startDate:  '8/1/19',
                endDate: '8/1/19',
                startTime: '9:00am',
                endTime: '4:00pm',
                location: '2911 Transworld Dr, Stockton, CA',
                description: 'Jateen\'s favorite class',
                schedule: ['9:00am-10:00am - Intro 10:00am-4:00pm - Test'],
                cap: '20',
                attending: '10/20'
            },

            {
                eventName: 'Code Stack Tour',
                eventType: 'Tour',
                startDate:  '8/1/19',
                endDate: '8/1/19',
                startTime: '9:00am',
                endTime: '4:00pm',
                location: '2911 Transworld Dr, Stockton, CA',
                description: 'Jateen\'s favorite class',
                schedule: '9:00am-10:00am - Intro 10:00am-4:00pm - Tour',
                cap: '20',
                attending: '10/20'
            },

            {
                eventName: 'PHP 101 Workshop',
                eventType: 'Workshop',
                startDate:  '8/1/19',
                endDate: '8/1/19',
                startTime: '9:00am',
                endTime: '4:00pm',
                location: '2911 Transworld Dr, Stockton, CA',
                description: 'Jateen\'s favorite class',
                schedule: '9:00am-10:00am - Lecture 10:00am-4:00pm - Work',
                cap: '20',
                attending: '10/20'
            }
        ];
    }

    ngOnInit() {
    }

}
