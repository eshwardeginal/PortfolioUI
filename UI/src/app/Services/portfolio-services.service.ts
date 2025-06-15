import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServicesService {

  baseUrl:string="https://localhost:7015"

  constructor(private httpClient :HttpClient) { }

  getProfile(){
    return this.httpClient.get(`${this.baseUrl}/api/Portfolio`);
  }
}
