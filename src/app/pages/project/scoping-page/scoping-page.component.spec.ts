import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopingPageComponent } from './scoping-page.component';

describe('ScopingPageComponent', () => {
  let component: ScopingPageComponent;
  let fixture: ComponentFixture<ScopingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
