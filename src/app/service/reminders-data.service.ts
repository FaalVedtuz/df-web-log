import { Observable } from 'rxjs/Observable';
import { ReminderModel } from './../models/reminder.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ReminderMainComponent } from './../components/reminder-main/reminder-main.component';
import { RequestOptions } from '@angular/http/';
import { HttpHeaders } from '@angular/common/http';

const apiURL = 'http://localhost:8000/api/reminders';

@Injectable()
export class RemindersDataService {


  constructor( private reminderHttp: HttpClient) { }

  public fetchReminder(): Observable<ReminderModel[]> {
    return this.reminderHttp
      .get<ReminderModel[]>(apiURL)
        .map( reminder => reminder );
  }

  // public addReminder(reminder) {
  //   const getReminderURL = `${apiURL}api/jsonBlob/${jsonID}`;
  //   const reminderData = JSON.stringify(reminder);
  //   return this.reminderHttp
  //     .post(getReminderURL, reminderData, {
  //       headers: new HttpHeaders().set('Content-Type', 'application/json'),
  //     });
  // }

  public saveReminder(reminder_id, reminderTitle: string, reminderDescription: string) {
    const getReminderById = `${apiURL}/${reminder_id}`;
    const body = { 'reminder_title': reminderTitle, 'reminder_desc': reminderDescription };
      return this.reminderHttp
        .put(getReminderById, body);
  }

  public deleteReminder(reminder_id: string) {
    const deleteReminderById = `${apiURL}/${reminder_id}`;
    return this.reminderHttp
      .delete(deleteReminderById);
  }
}
