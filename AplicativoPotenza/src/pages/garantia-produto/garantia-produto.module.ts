import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GarantiaProdutoPage } from './garantia-produto';

@NgModule({
  declarations: [
    GarantiaProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(GarantiaProdutoPage),
  ],
  exports: [
    GarantiaProdutoPage,
  ],
})
export class GarantiaProdutoPageModule {}
