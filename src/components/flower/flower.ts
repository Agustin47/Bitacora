import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'flower',
  templateUrl: 'flower.html'
})
export class FlowerComponent {

  text: string;

  fecha = '30/02/2020';
  name = 'Maka';
  genetic = 'Lemon Haze';
  period = 'Automatica';

  constructor(public navCtrl: NavController) {

  }

}
