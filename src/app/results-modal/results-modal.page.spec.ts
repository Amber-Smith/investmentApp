import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsModalPage } from './results-modal.page';

describe('ResultsModalPage', () => {
  let component: ResultsModalPage;
  let fixture: ComponentFixture<ResultsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
