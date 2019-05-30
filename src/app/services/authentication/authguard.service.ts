import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Authguard implements  CanActivate {

  constructor( private  router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ;
    if ( currentUser == null || currentUser.token == '') {

      this.router.navigate([''] , );
    } else {

    return true ;
    }
  }


}
