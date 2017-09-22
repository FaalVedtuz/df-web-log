import { UsersService } from '../../service/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private UserService: UsersService ) { }

  ngOnInit() {
  }

  registerUser(email: string, username: string, password: string) {
   
  }

}
