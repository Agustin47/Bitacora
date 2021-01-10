import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Flower } from '../../models';
import { Context } from '../../models/context/context';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  protected flowers = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public context: Context) {
    console.log(context);
    this.context.flowers.get()
        .then( val => this.flowers = val );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  add(){
    this.context.flowers.add({
      id: 'asdfa',
      name: 'prueba',
      date: '2020/02/05',
      genetic: 'ipa',
      period: 'nock'
    } as Flower);
    
  }

}
