import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ENDPOINTS } from '../models/endpoints';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  merchantId: string;
  merchantLogo: string;
  error = false;

  constructor(private httpClient: HttpClient) { }

  public getFullMenu(merchantId: string): any {
    return this.httpClient.get(ENDPOINTS.getFullMenu + merchantId);
  }

}
