import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gp60Page } from './gp60';

@NgModule({
  declarations: [
    Gp60Page,
  ],
  imports: [
    IonicPageModule.forChild(Gp60Page),
  ],
  exports: [
    Gp60Page,
  ],
})
export class Gp60PageModule {}
