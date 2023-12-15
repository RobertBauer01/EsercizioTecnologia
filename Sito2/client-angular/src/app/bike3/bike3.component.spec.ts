import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bike3Component } from './bike3.component';

describe('Bike3Component', () => {
  let component: Bike3Component;
  let fixture: ComponentFixture<Bike3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bike3Component]
    });
    fixture = TestBed.createComponent(Bike3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
