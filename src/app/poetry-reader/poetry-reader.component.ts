import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'poetry-reader',
  templateUrl: './poetry-reader.component.html',
  styleUrls: ['./poetry-reader.component.css']
})
export class PoetryReaderComponent implements OnInit {
  poem

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getPoem().subscribe((data)=>{
      this.poem = data['poem']
    });
  }

}
