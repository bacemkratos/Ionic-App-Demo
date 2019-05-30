import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/authentication/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  wrongCred: boolean;
  logininfo: any = {user_name: '' , password: '' , token: null};
  private subscriptions: Array<Subscription> = new Array<Subscription>();

  constructor( private auth: AuthService ,  private router: Router , private toastController: ToastController) { }

  ngOnInit() {}

    login() {
      const subs =  this.auth.login(this.logininfo).subscribe((value: any) => {
        localStorage.setItem('currentUser' , JSON.stringify( value) ) ;

      } , error1 => {
        switch (error1.status)  {
          case 0 : this.toast('Unexpected error while trying to connect to server \n' +
              // tslint:disable-next-line:align
              'details : ' + error1.error.message , 'danger') ; break;
          case 401:  this.showError();  break;
        }
      } , () => {
        this.router.navigate(['/dashboard']);
      });
      this.subscriptions.push(subs);
    }






  async toast(message: string  , type: string) {
    const toast = await this.toastController.create({

      message,
      duration: 5000 ,
      position: 'bottom',
      animated: true ,
      color: type ,
      showCloseButton: true,
      keyboardClose: true,
      closeButtonText: 'X'
    });
    toast.present();
  }
  showError() {
    this.wrongCred = true;

  }
}
