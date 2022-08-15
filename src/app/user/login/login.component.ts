import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ServicesService]
})
export class LoginComponent implements OnInit {
  username:any="";
  password:any="";
  User:any[]=[];

  constructor(private router:Router, private _user:ServicesService) { }

  ngOnInit(): void {
    this.User= this._user.getUser();
    console.log(this.User[0].uname);
    console.log(this.User[0].Pswd);
  }
  login() : void {
    if(this.username==this.User[0].uname &&  this.password==this.User[0].Pswd){
      this.router.navigate(["dashboard"])
    }
    
  }
  register():void{
    this.router.navigate(["registeration"])
  }

}
