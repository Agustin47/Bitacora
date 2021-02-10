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
  protected gender: any;

  constructor(public _context: Context, public _general: GeneralProvider
    ) {
    this.clean();
  }

  save(){
    console.log('Guardando...', this.newFlower);
    this._context.flowers.add(this.newFlower);
    this.clean();
  }

  valid(){
    return this.newFlower.name.trim().length > 0;
  }

  clean(){
    this.newFlower = {} as Flower;
    this.newFlower.id = '';
    this.newFlower.name = '';
    this.newFlower.date = this._general.getTodayString();
    this.newFlower.genetic = '';
    this.newFlower.period = '';
  }

}
