import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl,  NgForm,  Validators } from '@angular/forms';
import { ServicesService } from '../user/Services/services.service';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'],
  providers:[ServicesService]
})
export class RegisterationComponent implements OnInit {
   fname:string="";
   User:any[]=[];
   email:string="";
   pswd:string="";
   cpswd:string="";
  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
 login(){

  this.router.navigate(["login"])

 }
 emailFormControl = new FormControl('', [Validators.required, Validators.email]);
 
 saveUser(form:NgForm){
  this.User = form.value;
 
}
onCofirm(){
  if(this.pswd !== this.cpswd){
    alert("Confirm Password Don't MActch")
  }
}


}
