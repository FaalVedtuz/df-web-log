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
    this.descriptions = this.reminders.map(reminder => {
      return reminder.description;
    });
    return this.descriptions;
  }

  public addReminder(title: string, description: string) {
    this.reminders.push({ title, description });
  }

  public saveReminder(title: string, description: string) {
    this.reminders.push({ title, description });
  }


  public deleteReminder(reminderIndex: number) {
    this.reminders.splice(reminderIndex, 1);
  }
}
