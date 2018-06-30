import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModeloRotatorPage } from './modelo-rotator';

@NgModule({
  declarations: [
    ModeloRotatorPage,
  ],
  imports: [
    IonicPageModule.forChild(ModeloRotatorPage),
  ],
  exports: [
    ModeloRotatorPage,
  ],
})
export class ModeloRotatorPageModule {}
