import { UserModel } from './../models/user.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const _apiRoot = 'http://localhost:8000/';

@Injectable()
export class UsersService {

  userURL: string;

  constructor( private userHttp: HttpClient) { }

  login( username: string, password: string ) {
    const loginAPI = `${_apiRoot}api/login`;
    const body = { 'email': username , 'password': password };
    return this.userHttp
      .post(loginAPI, body );
  }

  register( email: string, username: string, password: string ) {

  }

}
