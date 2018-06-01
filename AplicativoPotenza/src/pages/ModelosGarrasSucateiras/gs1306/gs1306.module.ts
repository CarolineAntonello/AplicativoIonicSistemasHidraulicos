import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gs1306Page } from './gs1306';

@NgModule({
  declarations: [
    Gs1306Page,
  ],
  imports: [
    IonicPageModule.forChild(Gs1306Page),
  ],
  exports: [
    Gs1306Page,
  ],
})
export class Gs1306PageModule {}
