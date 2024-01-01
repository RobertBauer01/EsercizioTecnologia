import { Component } from '@angular/core';

@Component({
  selector: 'app-roadbikes',
  templateUrl: './roadbikes.component.html',
  styleUrls: ['./roadbikes.component.css']
})
export class RoadbikesComponent {
  bikes = [
    { desc: 'L81', img: 'assets/rBike1.jpg' },
    { desc: 'H50', img: 'assets/rBike2.jpg' },
    { desc: 'R69', img: 'assets/rBike3.jpg' }
  ];
}