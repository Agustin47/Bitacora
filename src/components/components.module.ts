import { NgModule } from '@angular/core';
import { FlowerComponent } from './flower/flower';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [FlowerComponent],
	imports: [IonicModule],
	exports: [FlowerComponent]
})
export class ComponentsModule {}
