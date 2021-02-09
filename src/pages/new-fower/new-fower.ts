import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Context, Flower } from '../../models';
import { GeneralProvider } from '../../provider/general';


@IonicPage()
@Component({
  selector: 'page-new-fower',
  templateUrl: 'new-fower.html',
})
export class NewFowerPage {

  protected newFlower: Flower;

  constructor(public _context: Context, public _general: GeneralProvider
    ) {
    this.clean();
  }

  save(){

    console.log('Guardando...', this.newFlower);
    this.newFlower.id = this._general.newGuid();
    this._context.flowers.add(this.newFlower);
    
    this.clean();
  }

  valid(){
    return this.newFlower.name.trim().length > 0;
  }

  clean(){
    this.newFlower = {} as Flower;
    this.newFlower.date = this._general.getTodayString();
    this.newFlower.name = '';
    this.newFlower.period = '';
    this.newFlower.genetic = '';
  }

}
