import { Component } from '@angular/core';

@Component({
  selector: 'app-mountainbikes',
  templateUrl: './mountainbikes.component.html',
  styleUrls: ['./mountainbikes.component.css']
})
export class MountainbikesComponent {
  bikes = [
    { desc: 'J90', img: 'assets/mBike1.jpg' },
    { desc: 'F44', img: 'assets/mBike2.jpg' },
    { desc: 'D20', img: 'assets/mBike3.jpg' }
  ];
}
