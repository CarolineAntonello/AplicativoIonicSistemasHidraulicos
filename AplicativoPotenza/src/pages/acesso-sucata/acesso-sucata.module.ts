import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcessoSucataPage } from './acesso-sucata';

@NgModule({
  declarations: [
    AcessoSucataPage,
  ],
  imports: [
    IonicPageModule.forChild(AcessoSucataPage),
  ],
  exports: [
    AcessoSucataPage,
  ],
})
export class AcessoSucataPageModule {}
