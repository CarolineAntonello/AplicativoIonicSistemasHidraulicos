import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gs1305Page } from './gs1305';

@NgModule({
  declarations: [
    Gs1305Page,
  ],
  imports: [
    IonicPageModule.forChild(Gs1305Page),
  ],
  exports: [
    Gs1305Page,
  ],
})
export class Gs1305PageModule {}
