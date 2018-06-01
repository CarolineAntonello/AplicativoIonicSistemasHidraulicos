import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ga650Page } from './ga650';

@NgModule({
  declarations: [
    Ga650Page,
  ],
  imports: [
    IonicPageModule.forChild(Ga650Page),
  ],
  exports: [
    Ga650Page,
  ],
})
export class Ga650PageModule {}
