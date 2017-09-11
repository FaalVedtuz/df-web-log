import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserModel } from './../../models/user.model';
import { UsersService } from './../../service/users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: string[];

  constructor(private userService: UsersService, private userHttp: HttpClient) { }

  ngOnInit() {
    this.userService.fetchUsers()
      .subscribe( res =>  this.users = res['users']);
  }

  checkUser(username: string, password: string) {
  //  this.users.forEach( user => {
  //    if (username === user['userName'] && password === user['password'] ) {
  //      console.log('user is registered');

  //    }else {
  //      console.log('user is not registered');
  //    }
  //    console.log(user);
  //   } );
  console.log('enter');
  this.userHttp.get('/oauth/clients')
    .map( res => console.log(res));
  }
}
