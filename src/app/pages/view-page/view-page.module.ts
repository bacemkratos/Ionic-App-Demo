import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {ListPage} from '../list/list.page';
import {ViewPageComponent} from './view-page.component';
import {FormioModule} from 'angular-formio';

@NgModule({
  declarations: [ViewPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewPageComponent
      }
    ]),
    FormioModule
  ]
})
export class ViewPageModule { }
