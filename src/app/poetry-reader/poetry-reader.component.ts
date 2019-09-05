import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ApiService } from '../api.service';

@Component({
  selector: 'poetry-reader',
  templateUrl: './poetry-reader.component.html',
  styleUrls: ['./poetry-reader.component.css']
})
export class PoetryReaderComponent implements OnInit {
  poem
  form: FormGroup;
  authors: any = ['default', 'tumblrPoet', 'rupiKaur']
  moods: any = ['basic', 'love', 'angst']

  constructor(private apiService: ApiService, public fb: FormBuilder) {
    this.form = this.formBuilder.group({
      orders: ['']
    });
  }

  poemForm = this.fb.group({
    poemAuthor: ['default'],
    poemMood: ['basic'],
  })

  ngOnInit() {
    this.getFullPoem()
  }

  getFullPoem() {
    // if (this.poemForm.value != 'undefined') {
      // alert(JSON.stringify(this.poemForm.authorName.value))
    // }

    this.apiService.getPoem().subscribe((data)=>{
      this.poem = data['poem']
    });
  }
}
