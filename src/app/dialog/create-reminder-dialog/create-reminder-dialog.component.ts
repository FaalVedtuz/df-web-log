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
    this.reminderData = this.reminderService.reminders;
    console.log(this.reminderData);
  }

  closeDialog() {
    this.createDialogRef.close();
  }

  saveReminder(title: string , description: string) {
    this.reminderService.addReminder(title, description);
    this.createDialogRef.close();
  }
}
