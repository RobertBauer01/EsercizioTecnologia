import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike1',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class Bike1Component implements OnInit {

  bikeImage: string = '/workspace/EsercizioTecnologia/Sito2/client-angular/images/bike1.jpg'; // Update with the actual path to your image
  bikeDescription: string = 'This is an awesome bike with a durable frame and high-performance features.';

  constructor() { }

  ngOnInit(): void {
  }

}
