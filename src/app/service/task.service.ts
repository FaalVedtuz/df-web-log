import { HttpModule, Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TaskService {
  apiRoot: String = 'https://api.myjson.com/';

  constructor(private http: Http) { }

  public doGet(): Observable<any> {
    const url = `${this.apiRoot}/bins/1gitst`;
    // const search = new URLSearchParams();
    // search.set('id', '1gitst');
    // search.set('limit', '25');
    return this.http.get(url);
  }

  public doPut() {
    const url = `${this.apiRoot}bins/1gitst`;
    const value: Object = {'taskName': 'A New Task Again', 'taskDescription': 'Some description'};
    this.http.put(url, {task: value})
      .subscribe(res => console.log((res.json())));
  }

}
