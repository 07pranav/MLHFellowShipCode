import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatetokenComponent } from './activatetoken.component';

describe('ActivatetokenComponent', () => {
  let component: ActivatetokenComponent;
  let fixture: ComponentFixture<ActivatetokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivatetokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatetokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
