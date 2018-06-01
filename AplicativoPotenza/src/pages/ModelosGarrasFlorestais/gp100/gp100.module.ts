import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gp100Page } from './gp100';

@NgModule({
  declarations: [
    Gp100Page,
  ],
  imports: [
    IonicPageModule.forChild(Gp100Page),
  ],
  exports: [
    Gp100Page,
  ],
})
export class Gp100PageModule {}
