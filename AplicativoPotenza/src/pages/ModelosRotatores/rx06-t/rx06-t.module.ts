import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Rx06TPage } from './rx06-t';

@NgModule({
  declarations: [
    Rx06TPage,
  ],
  imports: [
    IonicPageModule.forChild(Rx06TPage),
  ],
  exports: [
    Rx06TPage,
  ],
})
export class Rx06TPageModule {}
