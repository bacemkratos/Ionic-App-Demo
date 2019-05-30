import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/authentication/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public appPages = [
    {
      title: 'Accueil',
      url: '/dashboard/home',
      icon: 'home'
    },
    {
      title: 'Pages',
      url: '/dashboard/list',
      icon: 'list'
    }
  ];
  constructor( private auth: AuthService , private  router: Router) { }

  ngOnInit() {
    this.auth.registerRefreshTokenProcess();
  }

  logout() {
    this.auth.logout() ;
    this.auth.cancelRefreshTokenProcess();
    this.router.navigate(['\login']);
  }
}
