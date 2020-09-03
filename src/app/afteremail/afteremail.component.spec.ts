import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfteremailComponent } from './afteremail.component';

describe('AfteremailComponent', () => {
  let component: AfteremailComponent;
  let fixture: ComponentFixture<AfteremailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfteremailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfteremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
