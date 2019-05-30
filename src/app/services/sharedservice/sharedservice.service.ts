import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _form: any = {} ;
  private _title: string ;
  constructor() { }


  get form(): any {
    return this._form;
  }

  set form(value: any) {
    this._form = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
}
