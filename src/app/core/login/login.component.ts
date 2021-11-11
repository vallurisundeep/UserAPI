import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {  
    loading = false;
    submitted = false;    
  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {   
  }
  authenticateUser(){
  }
  // logIn() {
  //   this._loginService.AuthenticateUser("","").subscribe((data),
    
  //   )
  // }
}
