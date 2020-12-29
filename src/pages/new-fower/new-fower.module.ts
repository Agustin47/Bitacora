import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
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
  ]
})
export class NewFowerPageModule {}
