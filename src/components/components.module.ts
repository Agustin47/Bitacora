import { NgModule } from '@angular/core';
import { FlowerComponent } from './flower/flower';
import { IonicModule } from 'ionic-angular';
import { DecimalInputComponent } from './decimal-input/decimal-input';

@NgModule({
	declarations: [FlowerComponent,
    DecimalInputComponent],
	imports: [IonicModule],
	exports: [FlowerComponent,
    DecimalInputComponent]
})
export class ComponentsModule {}
