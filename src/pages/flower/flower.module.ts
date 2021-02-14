import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Context } from '../../models';
import { FlowerProvider } from '../../provider/flower';
import { FlowerPage } from './flower';

@NgModule({
  declarations: [
    FlowerPage,
  ],
  imports: [
    IonicPageModule.forChild(FlowerPage),
  ],
  providers: [
    Context,
    FlowerProvider
  ]
})
export class FlowerPageModule {}
