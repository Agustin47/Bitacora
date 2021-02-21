import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageZoomPage } from './image-zoom';

@NgModule({
  declarations: [
    ImageZoomPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageZoomPage),
  ],
  entryComponents:[
    ImageZoomPage
  ]
})
export class ImageZoomPageModule {}
