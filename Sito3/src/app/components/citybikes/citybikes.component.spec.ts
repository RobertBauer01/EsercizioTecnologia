import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitybikesComponent } from './citybikes.component';

describe('CitybikesComponent', () => {
  let component: CitybikesComponent;
  let fixture: ComponentFixture<CitybikesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitybikesComponent]
    });
    fixture = TestBed.createComponent(CitybikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
