import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gs1204Page } from './gs1204';

@NgModule({
  declarations: [
    Gs1204Page,
  ],
  imports: [
    IonicPageModule.forChild(Gs1204Page),
  ],
  exports: [
    Gs1204Page,
  ],
})
export class Gs1204PageModule {}
