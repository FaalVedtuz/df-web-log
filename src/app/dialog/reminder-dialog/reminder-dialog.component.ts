import { Observable } from 'rxjs/Observable';
import { ReminderModel } from './../../models/reminder.model';
import { Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { ReminderMainComponent } from './../../components/reminder-main/reminder-main.component';
import { RemindersDataService } from './../../service/reminders-data.service';

@Component({
  selector: 'app-reminder-dialog',
  templateUrl: './reminder-dialog.component.html',
  styleUrls: ['./reminder-dialog.component.css']
})
export class ReminderDialogComponent implements OnInit {
  reminderTitle: string;
  reminderDesc: string;
  reminderId: string;

  reminderEdit: Boolean;
  constructor(public dialogRef: MdDialogRef<ReminderDialogComponent>,
              @Inject(MD_DIALOG_DATA) public remindersData: ReminderModel,
             private reminderService: RemindersDataService) { }

  ngOnInit() {
    this.reminderEdit = false;
    this.reminderId = this.remindersData['reminder_id'];
    this.reminderTitle = this.remindersData['reminder_title'];
    this.reminderDesc = this.remindersData['reminder_desc'];
  }

  closeDialog() {
    this.dialogRef.close();
  }

  editReminder() {
    this.reminderEdit = true;
  }

  updateReminder( title: string, desc: string) {
    this.reminderService.saveReminder( this.reminderId, title, desc)
      .subscribe( res => res );
  }
}
