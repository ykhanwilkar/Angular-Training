import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question7Component } from './question7.component';

describe('Question7Component', () => {
  let component: Question7Component;
  let fixture: ComponentFixture<Question7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
