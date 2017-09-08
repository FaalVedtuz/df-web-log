import { Observable } from 'rxjs/Observable';
import { ReminderModel } from './../../models/reminder.model';
import { CreateReminderDialogComponent } from './../../dialog/create-reminder-dialog/create-reminder-dialog.component';

import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';

import { RemindersDataService } from './../../service/reminders-data.service';
import { ReminderDialogComponent } from './../../dialog/reminder-dialog/reminder-dialog.component';


@Component({
  selector: 'app-reminder-main',
  templateUrl: './reminder-main.component.html',
  styleUrls: ['./reminder-main.component.css']
})

export class ReminderMainComponent implements OnInit {

  reminders: ReminderModel[];
  reminderIndex: number;

  constructor(private reminderData: RemindersDataService,
    public dialog: MdDialog) { }

  ngOnInit() {
    return this.reminderData.fetchReminder()
    .subscribe( reminders => this.reminders = reminders );
  }

  openDialog(reminderIndex) {
    const dialogRef = this.dialog.open(ReminderDialogComponent, {
      data: [this.reminders[reminderIndex], reminderIndex],
      height: '360px',
      width: '600px',
      disableClose: true
    });

    dialogRef.afterClosed()
      .subscribe(response => { console.log(response); this.reminders = response; });
  }

  // createReminderDialog() {
  //   const createDialogRef = this.dialog.open(CreateReminderDialogComponent, {
  //     height: '360px',
  //     width: '600px',
  //     disableClose: true
  //   });
  // }

  // deleteReminder(reminderIndex: number) {
  //   this.reminderData.deleteReminder(reminderIndex);
  // }
}
