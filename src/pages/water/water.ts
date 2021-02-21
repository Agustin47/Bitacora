import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Context, Flower, Water } from 'models';
import { GeneralProvider } from 'provider';


@IonicPage()
@Component({
  selector: 'page-water',
  templateUrl: 'water.html',
})
export class WaterPage {

  protected water: Water;
  protected flowers: Flower[];
  protected products: any[];

  constructor(private _general: GeneralProvider, private _context: Context) {
    this.initialize();
  }

  initialize(){
    this.clean();
    this.flowers = [];
    this.products = [
      {
        name: '', amountInMillilitres: "0.00"
      }
    ];
    this.updateFlowers();
  }

  updateFlowers(){
    this._context.flowers.getAll()
        .then( f => {
          this.flowers = f;
        });
  }

  save(){
    console.log(this.water);
    this._context.waters.add(this.water);
    this.clean();
  }

  ionViewWillEnter(){
    this.updateFlowers();

    this._context.waters.getAll().then(val => console.log(val));
  }

  amountEvent(event){
    this.water.amountInMillilitres = event;
  }

  amountProductEvent(event, product: any){
    product.amountInMillilitres = event;
  }

  addProduct(){
    this.products.push({
      name: '', amountInMillilitres: "0.00"
    });
  }

  clean(){
    this.water = {} as Water;
    this.water.id = '';
    this.water.flowerId = '';
    this.water.date = this._general.getTodayString();
    this.water.product = '';
    this.water.amountInMillilitres = "0.00";
  }
}
