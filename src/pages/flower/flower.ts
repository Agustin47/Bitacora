import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Flower, Water } from '../../models';
import { FlowerProvider } from '../../provider/flower';

@IonicPage()
@Component({
  selector: 'page-flower',
  templateUrl: 'flower.html',
})
export class FlowerPage {

  protected me: Flower;
  protected waters: Water[];

  constructor(private flowerProvider: FlowerProvider,public navParams: NavParams) {
    this.clean();
    this.me = this.navParams.data.me;
    this.flowerProvider.getWaters(this.me.id)
                       .then(w => this.waters = w );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowerPage');
  }

  clean(){
    this.me = {} as Flower;
    this.waters = [];
  }

}
