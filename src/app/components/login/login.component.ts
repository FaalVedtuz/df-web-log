import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string;
  password: string;

  constructor() { }

  ngOnInit() {
    this.user = 'Jayson';
    this.password = "angular";
  }

  checkUser(userValue:string, passwordValue:string){
    if(this.user === userValue && this.password === passwordValue){
      alert("Its a match");
    }else{
      alert("Wrong Username/password");
    }
    return false;
  }

}
