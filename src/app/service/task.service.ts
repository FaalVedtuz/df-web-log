import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TaskModel } from './../models/task.model';


@Injectable()
export class TaskService {
  apiRoot: String = 'https://api.myjson.com/';
 

  constructor(private http: HttpClient) { }

  public getTask(): Observable<TaskModel[]> {
    const url = `${this.apiRoot}/bins/gvev9`;
    return this.http
      .get<TaskModel[]>(url)
        .map( response => response['task']);
  }

  public doPut() {
    const url = `${this.apiRoot}bins/1gitst`;
    const value: Object = {'taskName': 'A New Task Again', 'taskDescription': 'Some description'};
    this.http.put(url, {task: value})
      .subscribe(res => console.log((res)));
  }

}