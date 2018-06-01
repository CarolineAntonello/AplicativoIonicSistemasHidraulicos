import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Rx25TPage } from './rx25-t';

@NgModule({
  declarations: [
    Rx25TPage,
  ],
  imports: [
    IonicPageModule.forChild(Rx25TPage),
  ],
  exports: [
    Rx25TPage,
  ],
})
export class Rx25TPageModule {}
