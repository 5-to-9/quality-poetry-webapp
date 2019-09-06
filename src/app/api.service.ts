import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getPoem(author, mood) {
    return this.httpClient.get(`http://api.qualitypoetry.com/create?author=`+author+`&mood=`+mood);
  }
}
