import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadbikesComponent } from './roadbikes.component';

describe('RoadbikesComponent', () => {
  let component: RoadbikesComponent;
  let fixture: ComponentFixture<RoadbikesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoadbikesComponent]
    });
    fixture = TestBed.createComponent(RoadbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
