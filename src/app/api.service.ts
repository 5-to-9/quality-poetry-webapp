import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getPoem() {
    return this.httpClient.get(`http://api.qualitypoetry.com/create?author=default&mood=basic`);
  }
}
