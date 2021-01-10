import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { HomePage } from './home';
import { Context } from '../../models';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [    
    IonicPageModule.forChild(HomePage),  
    ComponentsModule,  
  ],
  entryComponents: [
    HomePage,
  ],
  providers: [
    Context
  ]
})
export class HomePageModule {}
