import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  username:string="";

  constructor() { }
  private UserServices:any[]=[{uname:"admin",Pswd:"admin"}]
  
  getUser(){
   return this.UserServices;
  }
}
