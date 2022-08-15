import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './user/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContentModule } from './main-content/main-content.module';
import { RegisterationModule } from './registeration/registeration.module';
import { MaterialUIModule } from './material-ui/material-ui.module';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,LoginModule,MaterialUIModule,
    AppRoutingModule,RegisterationModule,
    BrowserAnimationsModule,MainContentModule
  ],
 

  bootstrap: [AppComponent]
})
export class AppModule { }
