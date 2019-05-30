import { Injectable } from '@angular/core';
import {AuthService} from '../authentication/auth.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {baseUrl, getPagesListURL} from '../../../environments/urls';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private  auth: AuthService , private  http: HttpClient) {

  }


  getAllPagesByMenu(id: string ) {

    let hed = new HttpHeaders();
    hed = hed.set('x-auth-token' , this.auth.getAuthInfo().token);
    let myParams = new  HttpParams() ;
    myParams =  myParams.set('id' , id );
    const httpOptions = {
      headers: hed ,
      params: myParams
    };
    const url = baseUrl + getPagesListURL;
    return this.http.get(url,  httpOptions);

  }
}
