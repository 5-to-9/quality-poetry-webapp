import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoetryReaderComponent } from './poetry-reader/poetry-reader.component';
import { PoetryFormComponent } from './poetry-form/poetry-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PoetryReaderComponent,
    PoetryFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
