import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'poetry-reader',
  templateUrl: './poetry-reader.component.html',
  styleUrls: ['./poetry-reader.component.css']
})
export class PoetryReaderComponent implements OnInit {
  poem
  error

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getFullPoem()
  }

  getFullPoem() {
    this.apiService.getPoem().subscribe((data)=>{
      if (data['poem']) {
        this.poem = data['poem']
      } else if (data['error']) {
        this.error = data['error']
      }
    });
  }
}
