import { Gp135Page } from './../ModelosGarrasFlorestais/gp135/gp135';
import { Gp80Page } from './../ModelosGarrasFlorestais/gp80/gp80';
import { Gp60Page } from './../ModelosGarrasFlorestais/gp60/gp60';
import { Gp46HtPage } from './../ModelosGarrasFlorestais/gp46-ht/gp46-ht';
import { Gp30RPage } from './../ModelosGarrasFlorestais/gp30-r/gp30-r';
import { Gp25RPage } from './../ModelosGarrasFlorestais/gp25-r/gp25-r';
import { Gf40Page } from './../ModelosGarrasFlorestais/gf40/gf40';
import { Fl42Page } from '../ModelosGarrasFlorestais/fl42/fl42';
import { Gp800ClPage } from '../ModelosGarrasFlorestais/gp800-cl/gp800-cl';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Gp1000ClPage } from '../ModelosGarrasFlorestais/gp1000-cl/gp1000-cl';
import { Fl37RPage } from '../ModelosGarrasFlorestais/fl37-r/fl37-r';
import { Ga650Page } from '../ModelosGarrasFlorestais/ga650/ga650';
import { Gp37RPage } from '../ModelosGarrasFlorestais/gp37-r/gp37-r';
import { Gp100Page } from '../ModelosGarrasFlorestais/gp100/gp100';

@IonicPage()
@Component({
  selector: 'page-acesso',
  templateUrl: 'acesso.html',
})
export class AcessoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPageModelo(){
    this.navCtrl.push(Gp800ClPage.name);
  }

  openPageModeloGP800CL(){
    this.navCtrl.push(Gp800ClPage.name);
  }
  
  openPageModeloGP1000CL(){
    this.navCtrl.push(Gp1000ClPage.name);
  }
  
  openPageModeloFl37R(){
    this.navCtrl.push(Fl37RPage.name);
  }
  
  openPageModeloFl42(){
    this.navCtrl.push(Fl42Page.name);
  }

  openPageModeloGA650(){
    this.navCtrl.push(Ga650Page.name);
  }

  openPageModeloGf40(){
    this.navCtrl.push(Gf40Page.name);
  }
  
  openPageModeloGp25R(){
    this.navCtrl.push(Gp25RPage.name);
  }
  
  openPageModeloGp30R(){
    this.navCtrl.push(Gp30RPage.name);
  }
  
  openPageModeloGp37R(){
    this.navCtrl.push(Gp37RPage.name);
  }
  
  openPageModeloGp46Ht(){
    this.navCtrl.push(Gp46HtPage.name);
  }
  
  openPageModeloGp60(){
    this.navCtrl.push(Gp60Page.name);
  }
  
  openPageModeloGp80(){
    this.navCtrl.push(Gp80Page.name);
  }
  
  openPageModeloGp100(){
    this.navCtrl.push(Gp100Page.name);
  }
  
  openPageModeloGp135(){
    this.navCtrl.push(Gp135Page.name);
  }
}
