import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  fecha = '30/02/2020';
  name = 'Maka';
  genetic = 'Lemon Haze';
  period = 'Automatica';

  constructor(public navCtrl: NavController) {

  }

}
