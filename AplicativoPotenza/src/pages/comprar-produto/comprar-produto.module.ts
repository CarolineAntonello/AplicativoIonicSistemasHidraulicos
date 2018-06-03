import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComprarProdutoPage } from './comprar-produto';

@NgModule({
  declarations: [
    ComprarProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(ComprarProdutoPage),
  ],
})
export class ComprarProdutoPageModule {}
