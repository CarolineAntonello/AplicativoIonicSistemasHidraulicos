import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerguntasFrequentesPage } from './perguntas-frequentes';

@NgModule({
  declarations: [
    PerguntasFrequentesPage,
  ],
  imports: [
    IonicPageModule.forChild(PerguntasFrequentesPage),
  ],
  exports: [
    PerguntasFrequentesPage,
  ],
})
export class PerguntasFrequentesPageModule {}
