import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Rx45TPage } from './rx45-t';

@NgModule({
  declarations: [
    Rx45TPage,
  ],
  imports: [
    IonicPageModule.forChild(Rx45TPage),
  ],
  exports: [
    Rx45TPage,
  ],
})
export class Rx45TPageModule {}
