import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralProvider } from '../../provider/general';
import { WaterPage } from './water';

@NgModule({
  declarations: [
    WaterPage,
  ],
  imports: [
    IonicPageModule.forChild(WaterPage),
  ],
  providers: [
    GeneralProvider
  ]
})
export class WaterPageModule {}
