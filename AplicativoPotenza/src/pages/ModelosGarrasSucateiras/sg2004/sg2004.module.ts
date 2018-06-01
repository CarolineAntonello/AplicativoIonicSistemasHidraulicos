import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sg2004Page } from './sg2004';

@NgModule({
  declarations: [
    Sg2004Page,
  ],
  imports: [
    IonicPageModule.forChild(Sg2004Page),
  ],
  exports: [
    Sg2004Page,
  ],
})
export class Sg2004PageModule {}
