import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sg2004Page } from '../ModelosGarrasSucateiras/sg2004/sg2004';
import { Gs2604Page } from '../ModelosGarrasSucateiras/gs2604/gs2604';
import { Gs2805Page } from '../ModelosGarrasSucateiras/gs2805/gs2805';
import { Gs2400FmPage } from '../ModelosGarrasSucateiras/gs2400-fm/gs2400-fm';
import { Gs2500FmPage } from '../ModelosGarrasSucateiras/gs2500-fm/gs2500-fm';
import { Gs1204Page } from '../ModelosGarrasSucateiras/gs1204/gs1204';
import { Gg1224Page } from '../ModelosGarrasSucateiras/gg1224/gg1224';
import { Gg1225Page } from '../ModelosGarrasSucateiras/gg1225/gg1225';
import { Gs1254Page } from '../ModelosGarrasSucateiras/gs1254/gs1254';
import { Gs1304Page } from '../ModelosGarrasSucateiras/gs1304/gs1304';
import { Gs1305Page } from '../ModelosGarrasSucateiras/gs1305/gs1305';
import { Gs1306Page } from '../ModelosGarrasSucateiras/gs1306/gs1306';
import { Gs1354Page } from '../ModelosGarrasSucateiras/gs1354/gs1354';

@IonicPage()
@Component({
  selector: 'page-acesso-sucata',
  templateUrl: 'acesso-sucata.html',
})
export class AcessoSucataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcessoSucataPage');
  }
  openPageModeloSg2004(){
    this.navCtrl.push(Sg2004Page.name);
  }

  openPageModeloGs2604(){
    this.navCtrl.push(Gs2604Page.name);
  }
  
  openPageModeloGs2805(){
    this.navCtrl.push(Gs2805Page.name);
  }
  
  openPageModeloGs2400Fm(){
    this.navCtrl.push(Gs2400FmPage.name);
  }
  
  openPageModeloGs2500Fm(){
    this.navCtrl.push(Gs2500FmPage.name);
  }

  openPageModeloGs1204(){
    this.navCtrl.push(Gs1204Page.name);
  }

  openPageModeloGg1224(){
    this.navCtrl.push(Gg1224Page.name);
  }
  
  openPageModeloGg1225(){
    this.navCtrl.push(Gg1225Page.name);
  }
  
  openPageModeloGs1254(){
    this.navCtrl.push(Gs1254Page.name);
  }
  
  openPageModeloGs1304(){
    this.navCtrl.push(Gs1304Page.name);
  }
  
  openPageModeloGs1305(){
    this.navCtrl.push(Gs1305Page.name);
  }
  
  openPageModeloGs1306(){
    this.navCtrl.push(Gs1306Page.name);
  }
  
  openPageModeloGs1354(){
    this.navCtrl.push(Gs1354Page.name);
  }
}
