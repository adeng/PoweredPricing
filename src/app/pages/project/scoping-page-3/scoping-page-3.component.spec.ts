import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopingPage3Component } from './scoping-page-3.component';

describe('ScopingPagev2Component', () => {
  let component: ScopingPage3Component;
  let fixture: ComponentFixture<ScopingPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopingPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopingPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
