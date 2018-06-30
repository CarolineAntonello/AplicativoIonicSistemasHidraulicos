import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManutencaoProdutoPage } from './manutencao-produto';

@NgModule({
  declarations: [
    ManutencaoProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(ManutencaoProdutoPage),
  ],
  exports: [
    ManutencaoProdutoPage,
  ],
  
})
export class ManutencaoProdutoPageModule {}
