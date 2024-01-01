import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainbikesComponent } from './mountainbikes.component';

describe('MountainbikesComponent', () => {
  let component: MountainbikesComponent;
  let fixture: ComponentFixture<MountainbikesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MountainbikesComponent]
    });
    fixture = TestBed.createComponent(MountainbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
