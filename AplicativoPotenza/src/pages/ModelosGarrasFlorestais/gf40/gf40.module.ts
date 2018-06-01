import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gf40Page } from './gf40';

@NgModule({
  declarations: [
    Gf40Page,
  ],
  imports: [
    IonicPageModule.forChild(Gf40Page),
  ],
  exports: [
    Gf40Page,
  ],
})
export class Gf40PageModule {}
