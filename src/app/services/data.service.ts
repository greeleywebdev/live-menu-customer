import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  menu: any;

  constructor(private httpClient: HttpClient) { }

  public getMenuItems(): any {
    return this.httpClient.get('assets/files/NorthernRowMenu.json');
  }

}
