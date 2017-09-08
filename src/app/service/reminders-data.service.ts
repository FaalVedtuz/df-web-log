import { Observable } from 'rxjs/Observable';
import { ReminderModel } from './../models/reminder.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ReminderMainComponent } from './../components/reminder-main/reminder-main.component';
import { RequestOptions } from '@angular/http/';
import { HttpHeaders } from '@angular/common/http';

const apiURL = 'https://jsonblob.com/';
const jsonID = '860d9725-93e9-11e7-80fd-772fc00b2271';

@Injectable()
export class RemindersDataService {

  reminder: ReminderModel[];

  constructor( private reminderHttp: HttpClient) { }

  public fetchReminder(): Observable<ReminderModel[]> {
    const getReminderURL = `${apiURL}api/jsonBlob/${jsonID}`;
    return this.reminderHttp
      .get<ReminderModel[]>(getReminderURL)
        .map( reminder => reminder['reminders'] );
  }

  // public addReminder(reminder) {
  //   const getReminderURL = `${apiURL}api/jsonBlob/${jsonID}`;
  //   const reminderData = JSON.stringify(reminder);
  //   return this.reminderHttp
  //     .post(getReminderURL, reminderData, {
  //       headers: new HttpHeaders().set('Content-Type', 'application/json'),
  //     });
  // }

  public saveReminder(reminderTitle: string, reminderDescription: string) {
    const getReminderURL = `${apiURL}api/jsonBlob/${jsonID}`;
    const body = { 'title': reminderTitle, 'description': reminderDescription };
      return this.reminderHttp
        .put(getReminderURL, JSON.stringify(body));
  }
}
