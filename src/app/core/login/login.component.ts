import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
    loading = false;
    submitted = false;
    
  constructor() { }

  ngOnInit(): void {
   
  }

  authenticateUser(){

  }
  logIn() {

  }
}
