import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SegmentosPage } from './segmentos';

@NgModule({
  declarations: [
    SegmentosPage,
  ],
  imports: [
    IonicPageModule.forChild(SegmentosPage),
  ],
  exports: [
    SegmentosPage,
  ],
})
export class SegmentosPageModule {}
