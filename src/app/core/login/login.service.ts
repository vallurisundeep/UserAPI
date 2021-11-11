import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

AuthenticateUser(userName:string,userPswd:string){
    let baseURl=''+userName+userPswd;
    return(baseURl);


}




}