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
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga natus nemo eligendi at temporibus suscipit architecto maiores deserunt modi commodi obcaecati nobis, quo, vero corporis amet veniam doloremque placeat! Dolore!'
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
