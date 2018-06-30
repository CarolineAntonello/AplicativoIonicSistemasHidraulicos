import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModeloProdutoPage } from './modelo-produto';

@NgModule({
  declarations: [
    ModeloProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModeloProdutoPage),
  ],
  exports: [
    ModeloProdutoPage,
  ],
})
export class ModeloProdutoPageModule {}
