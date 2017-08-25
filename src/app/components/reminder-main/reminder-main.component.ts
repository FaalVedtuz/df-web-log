import { CreateReminderDialogComponent } from './../../dialog/create-reminder-dialog/create-reminder-dialog.component';

import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';

import { RemindersDataService } from './../../service/reminders-data.service';
import { ReminderDialogComponent } from './../../dialog/reminder-dialog/reminder-dialog.component';

export class Reminders {
  title: string;
  description: string;
}

@Component({
  selector: 'app-reminder-main',
  templateUrl: './reminder-main.component.html',
  styleUrls: ['./reminder-main.component.css']
})

export class ReminderMainComponent implements OnInit {

  reminders: any[];
  reminderDetail: any[];
  reminderIndex: number;

  constructor(private reminderData: RemindersDataService,
    public dialog: MdDialog) { }

  ngOnInit() {
    this.reminders = this.reminderData.reminders;
  }

  openDialog(reminderIndex) {
    const dialogRef = this.dialog.open(ReminderDialogComponent, {
      data: this.reminders[reminderIndex],
      height: '320px',
      width: '600px',
      disableClose: true
    });
  }

  createReminderDialog() {
    const createDialogRef = this.dialog.open(CreateReminderDialogComponent, {
      height: '360px',
      width: '600px',
      disableClose: true
    });
  }
}
