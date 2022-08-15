import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterationComponent } from './registeration.component';
import { MaterialUIModule } from '../material-ui/material-ui.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';




@NgModule({
  declarations: [
    RegisterationComponent
  ],
  imports: [
    CommonModule,MaterialUIModule,FormsModule, ReactiveFormsModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class RegisterationModule { }
