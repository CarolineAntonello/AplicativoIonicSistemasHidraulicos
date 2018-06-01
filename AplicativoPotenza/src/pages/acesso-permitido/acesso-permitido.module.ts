import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcessoPermitidoPage } from './acesso-permitido';

@NgModule({
  declarations: [
    AcessoPermitidoPage,
  ],
  imports: [
    IonicPageModule.forChild(AcessoPermitidoPage),
  ],
  exports: [
    AcessoPermitidoPage,
  ],
})
export class AcessoPermitidoPageModule {}
