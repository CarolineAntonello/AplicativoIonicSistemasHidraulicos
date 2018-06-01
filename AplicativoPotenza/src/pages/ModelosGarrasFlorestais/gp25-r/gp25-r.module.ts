import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gp25RPage } from './gp25-r';

@NgModule({
  declarations: [
    Gp25RPage,
  ],
  imports: [
    IonicPageModule.forChild(Gp25RPage),
  ],
  exports: [
    Gp25RPage,
  ],
})
export class Gp25RPageModule {}
