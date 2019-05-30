import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {DashboardComponent} from './dashboard.component';
import {IonicModule} from '@ionic/angular';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: '../home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: '../list/list.module#ListPageModule'
  },
  {
    path: 'view',
    loadChildren: '../view-page/view-page.module#ViewPageModule'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule ,
    IonicModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
