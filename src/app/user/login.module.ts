import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MaterialUIModule } from '../material-ui/material-ui.module';

@NgModule({
  declarations: [
  
    LoginComponent
  ],
  imports: [
    CommonModule,FormsModule,MaterialUIModule
  ],
  exports:[
    LoginComponent]
})
export class LoginModule { }
