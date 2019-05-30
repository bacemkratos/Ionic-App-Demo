import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/sharedservice/sharedservice.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss'],
})
export class ViewPageComponent implements OnInit {
   private  title: string;
  private form: any ;
  constructor(private  shared: SharedService) { }

  ngOnInit() {
    this.form = this.shared.form ;
    this.title = this.shared.title ;
  }

}
