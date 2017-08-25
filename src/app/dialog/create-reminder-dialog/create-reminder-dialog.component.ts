import { MdDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-reminder-dialog',
  templateUrl: './create-reminder-dialog.component.html',
  styleUrls: ['./create-reminder-dialog.component.css']
})
export class CreateReminderDialogComponent implements OnInit {

  constructor(public createDialogRef: MdDialogRef<CreateReminderDialogComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    this.createDialogRef.close();
  }

  saveReminder() {}
}
