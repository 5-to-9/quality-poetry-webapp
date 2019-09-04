import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoetryFormComponent } from './poetry-form.component';

describe('PoetryFormComponent', () => {
  let component: PoetryFormComponent;
  let fixture: ComponentFixture<PoetryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoetryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoetryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
