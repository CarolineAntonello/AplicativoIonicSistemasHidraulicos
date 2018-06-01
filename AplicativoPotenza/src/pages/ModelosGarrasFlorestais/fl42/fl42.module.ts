import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Fl42Page } from './fl42';

@NgModule({
  declarations: [
    Fl42Page,
  ],
  imports: [
    IonicPageModule.forChild(Fl42Page),
  ],
  exports: [
    Fl42Page,
  ],
})
export class Fl42PageModule {}
