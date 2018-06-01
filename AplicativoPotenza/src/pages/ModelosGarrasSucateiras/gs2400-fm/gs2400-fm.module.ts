import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gs2400FmPage } from './gs2400-fm';

@NgModule({
  declarations: [
    Gs2400FmPage,
  ],
  imports: [
    IonicPageModule.forChild(Gs2400FmPage),
  ],
  exports: [
    Gs2400FmPage,
  ],
})
export class Gs2400FmPageModule {}
