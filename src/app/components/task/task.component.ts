import { ReminderMainComponent } from './../reminder-main/reminder-main.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TaskService } from './../../service/task.service';
import { TaskModel } from './../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

// export class TaskTableComponent {
//   displayedColumns = ['name', 'description', 'startTime', 'endTime'];
// }

// export class TaskDataSource extends DataSource<any> {
//   connect(): Observable<TaskModel[]> {
// return 
//   }

//   disconnect() {}
// }

export class TaskComponent implements OnInit {

  tasks: TaskModel[];
  response: any;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  doTask() {
   return this.taskService
    .getTask()
      .subscribe( task => this.tasks = task );
  }

  putData() {
    return this.taskService.doPut();
  }
}

