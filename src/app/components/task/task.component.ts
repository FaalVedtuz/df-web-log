import { Component, OnInit } from '@angular/core';

import { TaskService } from './../../service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

reponseText: String;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  getAPI() {
    return this.taskService
      .doGet()
      .subscribe(
        res => console.log(JSON.parse(res._body))
      );
  }

  putData() {
    return this.taskService.doPut();
  }
}
