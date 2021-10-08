import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

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
