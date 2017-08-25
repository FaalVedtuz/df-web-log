import { Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reminder-dialog',
  templateUrl: './reminder-dialog.component.html',
  styleUrls: ['./reminder-dialog.component.css']
})
export class ReminderDialogComponent implements OnInit {

  reminderEdit: Boolean;
  constructor(public dialogRef: MdDialogRef<ReminderDialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: string ) { }

  ngOnInit() {
    this.reminderEdit = false;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  editReminder() {
    this.reminderEdit = true;
  }
}
