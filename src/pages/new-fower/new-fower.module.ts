import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { Context } from '../../models';
import { GeneralProvider } from '../../provider/general';
import { NewFowerPage } from './new-fower';

@NgModule({
  declarations: [
    NewFowerPage,
  ],
  imports: [
    IonicPageModule.forChild(NewFowerPage),
    ComponentsModule,
  ],
  entryComponents:[
    NewFowerPage,
  ],
  providers: [
    Context,
    GeneralProvider
  ]
})
export class NewFowerPageModule {}
