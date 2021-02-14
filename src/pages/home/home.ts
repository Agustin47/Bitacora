import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Flower } from '../../models';
import { Context } from '../../models/context/context';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  protected flowers: Flower[] = [];

  constructor(public context: Context, public navCtrl: NavController) {
    this.refreshList();
  }

  ionViewWillEnter(){
    this.refreshList();
  }
  
  refreshList(){
    this.context.flowers.getAll().then( val => this.flowers = val );
  }

  openFlower(event: any, flower: Flower){
    console.log(flower);
    this.navCtrl.push('FlowerPage', { me: flower });
  }
}
