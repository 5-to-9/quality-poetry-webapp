import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoetryReaderComponent } from './poetry-reader.component';

describe('PoetryReaderComponent', () => {
  let component: PoetryReaderComponent;
  let fixture: ComponentFixture<PoetryReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoetryReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoetryReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
