import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gp1000ClPage } from './gp1000-cl';

@NgModule({
  declarations: [
    Gp1000ClPage,
  ],
  imports: [
    IonicPageModule.forChild(Gp1000ClPage),
  ],
  exports: [
    Gp1000ClPage,
  ],
})
export class Gp1000ClPageModule {}
