import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {authUrl, baseUrl, refreshTokenUrl} from '../../../environments/urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   refreshTokenProcess: any ;

  constructor(private  http: HttpClient  ) { }


  login(userinfo: any) {
    const url = baseUrl + authUrl;
    return this.http.post(url, userinfo);
  }

  refreshToken() {
    let hed = new HttpHeaders();
    hed = hed.set('x-auth-token' ,  this.getAuthInfo().token);
    const httpOptions = {
      headers: hed
    };
    const url = baseUrl + refreshTokenUrl;
    return this.http.get(url, httpOptions );
  }

  getAuthInfo() {
    return JSON.parse(localStorage.getItem('currentUser')) ;
  }

  registerRefreshTokenProcess() {

    const currentUser =  JSON.parse(localStorage.getItem('currentUser'));
    // tslint:disable-next-line:variable-name
    const _this = this ;
    if ( currentUser != null  && currentUser.token != '') {
    this.refreshTokenProcess =  setInterval(() => {
          _this.refreshToken().subscribe((value: any) => {
              localStorage.setItem('currentUser', JSON.stringify(value));
          });
    }, 10000);
    }
  }
  cancelRefreshTokenProcess() {
  clearInterval();
  }

  logout() {
      localStorage.setItem('currentUser', JSON.stringify({user_name: '', display_name: '', token: '', defaultPage: '/dashboard', roles: ['GUEST']}));
  }

}
