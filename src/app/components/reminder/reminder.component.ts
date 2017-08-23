
import { Component, OnInit, Input } from '@angular/core';

import { ReminderMainComponent, Reminders } from './../reminder-main/reminder-main.component';
import { RemindersDataService } from './../../service/reminders-data.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  public remindersTitle: any[];

  constructor(private reminderService: RemindersDataService) { }

  ngOnInit() {
    this.remindersTitle = this.reminderService.reminders;
  }

}

