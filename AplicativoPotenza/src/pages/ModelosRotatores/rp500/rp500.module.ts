import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Rp500Page } from './rp500';

@NgModule({
  declarations: [
    Rp500Page,
  ],
  imports: [
    IonicPageModule.forChild(Rp500Page),
  ],
  exports: [
    Rp500Page,
  ],
})
export class Rp500PageModule {}
