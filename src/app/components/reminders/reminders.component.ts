import { Observable } from 'rxjs/Observable';
import { CreateReminderDialogComponent } from './../../dialog/create-reminder-dialog/create-reminder-dialog.component';

import { MdDialog, MdDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { ReminderDialogComponent } from './../../dialog/reminder-dialog/reminder-dialog.component';
import { ReminderModel } from './../../models/reminder.model';
import { RemindersDataService } from './../../service/reminders-data.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})

export class RemindersComponent implements OnInit {

  remindersData$: Array<ReminderModel>;

  constructor( public reminderService: RemindersDataService,
  public reminderDialog: MdDialog ) { }

  ngOnInit() {
  return this.reminderService.fetchReminder()
    .subscribe( response => this.remindersData$ = response );

  }

  trackReminders(index: number, reminder: ReminderModel): number {
    return reminder.id;
  }

  openReminderDialog(reminderIndex) {
    const reminderDialog = this.reminderDialog.open(ReminderDialogComponent, {
      data: this.remindersData$[reminderIndex],
      height: '360px',
      width: '600px',
      disableClose: true
    });
  }

  createReminderDialog() {
    const reminderDialog = this.reminderDialog.open(CreateReminderDialogComponent, {
      height: '360px',
      width: '600px',
      disableClose: true
    });
  }


  deleteReminder(reminder_index: number, reminderId: string) {

    this.reminderService.deleteReminder(reminderId)
      .subscribe();

    this.remindersData$.splice(reminder_index, 1);


  }

}
