import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasstwoComponent } from './forgotpasstwo.component';

describe('ForgotpasstwoComponent', () => {
  let component: ForgotpasstwoComponent;
  let fixture: ComponentFixture<ForgotpasstwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotpasstwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpasstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
