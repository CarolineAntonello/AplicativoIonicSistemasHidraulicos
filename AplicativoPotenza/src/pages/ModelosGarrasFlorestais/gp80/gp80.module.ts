import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gp80Page } from './gp80';

@NgModule({
  declarations: [
    Gp80Page,
  ],
  imports: [
    IonicPageModule.forChild(Gp80Page),
  ],
  exports: [
    Gp80Page,
  ],
})
export class Gp80PageModule {}
