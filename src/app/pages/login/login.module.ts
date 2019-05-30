import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class LoginModule { }
