import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Flower } from '../../models';
import { Context } from '../../models/context/context';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  protected flowers = [];

  constructor(public context: Context) {
    console.log(context);
    this.context.flowers.get()
        .then( val => this.flowers = val );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillEnter(){
    this.context.flowers.get()
        .then( val => this.flowers = val );
  }
  
}
