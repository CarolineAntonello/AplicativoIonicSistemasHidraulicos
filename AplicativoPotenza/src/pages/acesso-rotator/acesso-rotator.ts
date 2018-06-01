import { Rp500Page } from './../ModelosRotatores/rp500/rp500';
import { Rx25TPage } from './../ModelosRotatores/rx25-t/rx25-t';
import { Rx45TPage } from './../ModelosRotatores/rx45-t/rx45-t';
import { Rx145RPage } from './../ModelosRotatores/rx145-r/rx145-r';
import { Rx06TPage } from './../ModelosRotatores/rx06-t/rx06-t';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AcessoRotatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acesso-rotator',
  templateUrl: 'acesso-rotator.html',
})
export class AcessoRotatorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcessoRotatorPage');
  }

  openPageModeloRX06T(){
    this.navCtrl.push(Rx06TPage.name);
  }

  openPageModeloRX145R(){
    this.navCtrl.push(Rx145RPage.name);
  }
  
  openPageModeloRX45T(){
    this.navCtrl.push(Rx45TPage.name);
  }
  
  openPageModeloRX25T(){
    this.navCtrl.push(Rx25TPage.name);
  }
  
  openPageModeloRP500(){
    this.navCtrl.push(Rp500Page.name);
  }

}
