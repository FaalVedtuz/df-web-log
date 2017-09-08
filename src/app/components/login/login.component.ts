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

  constructor(private user: UsersService) { }

  ngOnInit() {
    this.user.fetchUsers()
      .subscribe( res =>  this.users = res);
  }

  checkUser(username: string) {
  }
}
