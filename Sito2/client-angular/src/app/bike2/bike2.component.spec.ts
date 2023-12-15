import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bike2Component } from './bike2.component';

describe('Bike2Component', () => {
  let component: Bike2Component;
  let fixture: ComponentFixture<Bike2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bike2Component]
    });
    fixture = TestBed.createComponent(Bike2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
