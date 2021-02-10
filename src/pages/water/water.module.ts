import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Context } from '../../models';
import { GeneralProvider } from '../../provider/general';
import { WaterPage } from './water';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    WaterPage,
  ],
  imports: [
    IonicPageModule.forChild(WaterPage),
    ComponentsModule
  ],
  providers: [
    GeneralProvider,
    Context
  ]
})
export class WaterPageModule {}
