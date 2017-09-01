import { Observable } from 'rxjs/Observable';
import { ReminderModel } from './../models/reminder.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ReminderMainComponent } from './../components/reminder-main/reminder-main.component';

const reminderURL = 'http://api.myjson.com/bins/1atjg1';

@Injectable()
export class RemindersDataService {
  titles: string;
  descriptions: string;
  reminderIndex: string;

  constructor( private reminderHttp: HttpClient) { }

  public fetchReminder(): Observable<ReminderModel[]> {
    return this.reminderHttp
      .get<ReminderModel[]>(reminderURL)
        .map( response => response['reminders'] );
  }

  // public getTitle() {
  //   for ( let i = 0; i < this.reminders.length; i++) {
  //     this.titles[i] = this.reminders[i].title;
  //   }
  //   return this.titles;
  // }

  // public getDescription() {
  //   this.descriptions = this.reminders.map(reminder => {
  //     return reminder.description;
  //   });
  //   return this.descriptions;
  // }

  // public addReminder(title: string, description: string) {
  //   this.reminders.push({ title, description });
  // }

  // public saveReminder(reminderData: string[]): Observable<ReminderModel[]> {
  //   return this.reminderHttp
  //     .put<ReminderModel[]>(reminderURL);
  // }


  // public deleteReminder(reminderIndex: number) {
  //   this.reminders.splice(reminderIndex, 1);
  // }
}
