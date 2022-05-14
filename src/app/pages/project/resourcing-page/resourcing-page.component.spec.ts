import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcingPageComponent } from './resourcing-page.component';

describe('ResourcingPageComponent', () => {
  let component: ResourcingPageComponent;
  let fixture: ComponentFixture<ResourcingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
