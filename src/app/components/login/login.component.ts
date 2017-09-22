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
  users: object;

  constructor(private userService: UsersService, private userHttp: HttpClient) { }

  ngOnInit() {

  }

  checkUser(username: string, password: string) {
    this.userService.login(username, password)
      .subscribe( res => console.log(res) );
  }
}
