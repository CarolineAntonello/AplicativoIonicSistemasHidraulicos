import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcessoRotatorPage } from './acesso-rotator';

@NgModule({
  declarations: [
    AcessoRotatorPage,
  ],
  imports: [
    IonicPageModule.forChild(AcessoRotatorPage),
  ],
  exports: [
    AcessoRotatorPage,
  ],
})
export class AcessoRotatorPageModule {}
