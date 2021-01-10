import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flower } from '../../models';


@Component({
  selector: 'flower',
  templateUrl: 'flower.html'
})
export class FlowerComponent {

  @Input() data : Flower;


  date = '30/02/2020';
  name = 'linda'
  genetic = 'Lemon Haze';
  period = 'Automatica';

  constructor(public navCtrl: NavController) {
  }

}
