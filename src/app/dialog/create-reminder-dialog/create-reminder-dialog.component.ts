import { RemindersDataService } from './../../service/reminders-data.service';
import { MdDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-reminder-dialog',
  templateUrl: './create-reminder-dialog.component.html',
  styleUrls: ['./create-reminder-dialog.component.css']
})
export class CreateReminderDialogComponent implements OnInit {
  reminderData: object[];

  constructor(public createDialogRef: MdDialogRef<CreateReminderDialogComponent>,
  private http: HttpClient, private reminderService: RemindersDataService) { }

  ngOnInit() {

  }

  closeDialog() {
    this.createDialogRef.close();
  }

  // saveReminder(title: string , description: string) {
  //   const reminder = { 'reminders': [ {'title': `${title}` , 'description': `${description}` }] };
  //   this.reminderService.addReminder(reminder)
  //     .subscribe( res => { this.reminderService.fetchReminder(); return true; });
  //   this.createDialogRef.close();
  // }
}
