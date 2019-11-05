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

  selectedMood: string
  selectedAuthor: string

  authors: any = ['default', 'tumblrPoet', 'rupiKaur']
  moods: any = ['basic', 'love', 'angst']

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.selectedMood = 'basic'
    this.selectedAuthor = 'default'
    this.getFullPoem()
  }

  getFullPoem() {
    this.apiService.getPoem(this.selectedAuthor, this.selectedMood).subscribe((data)=>{
      if (data['poem']) {
        this.poem = data['poem']
      } else if (data['error']) {
        this.error = data['error']
      }
    });
  }

  selectMood (event: any) {
    this.selectedMood = event.target.value;
  }

  selectAuthor (event: any) {
    this.selectedAuthor = event.target.value;
  }
}
