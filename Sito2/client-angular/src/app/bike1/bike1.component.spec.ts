import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bike1Component } from './bike1.component';

describe('Bike1Component', () => {
  let component: Bike1Component;
  let fixture: ComponentFixture<Bike1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bike1Component]
    });
    fixture = TestBed.createComponent(Bike1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
