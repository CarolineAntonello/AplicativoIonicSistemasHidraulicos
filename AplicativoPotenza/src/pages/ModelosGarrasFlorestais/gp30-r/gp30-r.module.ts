import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gp30RPage } from './gp30-r';

@NgModule({
  declarations: [
    Gp30RPage,
  ],
  imports: [
    IonicPageModule.forChild(Gp30RPage),
  ],
  exports: [
    Gp30RPage,
  ],
})
export class Gp30RPageModule {}
