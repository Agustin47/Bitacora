import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Context } from '../../models/context/context';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  protected flowers = [];

  constructor(public context: Context) {
    this.refreshList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillEnter(){
    this.refreshList();
    console.log(this.flowers);
  }
  
  refreshList(){
    this.context.flowers.getAll().then( val => this.flowers = val );
  }
}
