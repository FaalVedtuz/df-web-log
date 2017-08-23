import { Component, OnInit, Input } from '@angular/core';

import { RemindersDataService } from './../../service/reminders-data.service';

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

  reminderTitle: any[];
  reminderDetail: any[];

  constructor(private reminderData: RemindersDataService) { }

  ngOnInit() {
    this.reminderTitle = this.reminderData.getTitle();
    this.reminderDetail = this.reminderData.getDescription();
  }
}
