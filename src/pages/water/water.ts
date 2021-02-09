import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GeneralProvider } from '../../provider/general';


@IonicPage()
@Component({
  selector: 'page-water',
  templateUrl: 'water.html',
})
export class WaterPage {

  protected date: string;
  protected product: string;

  constructor(private _general: GeneralProvider) {
    this.date = this._general.getTodayString();
    this.product = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaterPage');
  }

}
