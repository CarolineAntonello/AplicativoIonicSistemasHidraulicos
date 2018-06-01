import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gp800ClPage } from './gp800-cl';

@NgModule({
  declarations: [
    Gp800ClPage,
  ],
  imports: [
    IonicPageModule.forChild(Gp800ClPage),
  ],
  exports: [
    Gp800ClPage,
  ],
})
export class Gp800ClPageModule {}
