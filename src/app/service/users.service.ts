import { UserModel } from './../models/user.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const _apiRoot = 'https://jsonblob.com';

@Injectable()
export class UsersService {

  userURL: string;

  constructor( private userHttp: HttpClient) { }

  public fetchUsers() {
    const userURL = `${_apiRoot}/api/jsonBlob/45a1bc88-94b8-11e7-80fd-cd9bc3c6880d`;

    return this.userHttp.get(userURL)
        .map( res => res as string[] );
  }

}
