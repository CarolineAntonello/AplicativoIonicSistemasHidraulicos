import { AcessoPage } from './../acesso/acesso';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcessoSucataPage } from '../acesso-sucata/acesso-sucata';
import { AcessoRotatorPage } from '../acesso-rotator/acesso-rotator';

@IonicPage()
@Component({
  selector: 'page-segmentos',
  templateUrl: 'segmentos.html',
})
export class SegmentosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {  
}

  openAcessoPageFlorestal(){
    this.navCtrl.push(AcessoPage.name);
  }

  openAcessoPageSucata(){
    this.navCtrl.push(AcessoSucataPage.name);
  }
  
  openAcessoPageRotator(){
    this.navCtrl.push(AcessoRotatorPage.name);
  }
}
