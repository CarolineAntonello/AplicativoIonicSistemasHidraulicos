import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gp135Page } from './gp135';

@NgModule({
  declarations: [
    Gp135Page,
  ],
  imports: [
    IonicPageModule.forChild(Gp135Page),
  ],
  exports: [
    Gp135Page,
  ],
})
export class Gp135PageModule {}
