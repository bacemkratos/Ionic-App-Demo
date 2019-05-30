import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../services/dashboard/dashboard.service';
import {Router} from '@angular/router';
import {SharedService} from '../../services/sharedservice/sharedservice.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;

  public items: Array<{TypeStyle: string , actionLabel: string , bootstrapStyle: string , existAction: boolean  , form: string ,
    // tslint:disable-next-line:max-line-length
    icon: string , id: number , imageUri: string , isExistAction: boolean , responseActionType: string , responsePage: string , title: string
    , typeStyle: string , variables: any }> = [];

  constructor( private dashboardService: DashboardService , private router: Router ,
               private shared: SharedService) {

  }

  ngOnInit() {
    this.dashboardService.getAllPagesByMenu('13').subscribe(
        (value: any) => {
          this.items = value ;
        }
    );
  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
  viewPage(form: any, title: string) {
         this.shared.form = JSON.parse(form) ;
         this.shared.title = title ;
         this.router.navigate(['dashboard/view']);
  }
}
