import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopingPagev2Component } from './scoping-page-3.component';

describe('ScopingPagev2Component', () => {
  let component: ScopingPagev2Component;
  let fixture: ComponentFixture<ScopingPagev2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopingPagev2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopingPagev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
