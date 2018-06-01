import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gs2500FmPage } from './gs2500-fm';

@NgModule({
  declarations: [
    Gs2500FmPage,
  ],
  imports: [
    IonicPageModule.forChild(Gs2500FmPage),
  ],
  exports: [
    Gs2500FmPage,
  ],
})
export class Gs2500FmPageModule {}
