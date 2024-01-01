import { Component } from '@angular/core';

@Component({
  selector: 'app-citybikes',
  templateUrl: './citybikes.component.html',
  styleUrls: ['./citybikes.component.css']
})
export class CitybikesComponent {
  bikes = [
    { desc: 'E10', img: 'assets/cBike1.jpg' },
    { desc: 'V30', img: 'assets/cBike2.jpg' },
    { desc: 'B78', img: 'assets/cBike3.jpg' }
  ];
}