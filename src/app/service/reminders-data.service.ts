import { Injectable } from '@angular/core';

import { ReminderMainComponent, Reminders } from './../components/reminder-main/reminder-main.component';

@Injectable()
export class RemindersDataService {
  titles: any[] = [];
  descriptions: any[] = [];

  constructor() { }

  reminders: Reminders[] = [
    {
      title: 'First Note',
      description: 'This is a description for the first note.'
    },
    {
      title: 'Second Note',
      description: 'This is a description for the second note.'
    }
  ];

  public getTitle() {
    for ( let i = 0; i < this.reminders.length; i++) {
      this.titles[i] = this.reminders[i].title;
    }
    return this.titles;
  }

  public getDescription() {
    for ( let i = 0; i < this.reminders.length; i++) {
      this.descriptions[i] = this.reminders[i].description;
    }
    return this.descriptions;
  }
}
