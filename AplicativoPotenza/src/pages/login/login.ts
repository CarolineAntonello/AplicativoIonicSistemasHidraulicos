import { AcessoPermitidoPage } from './../acesso-permitido/acesso-permitido';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { User } from '../../models/user';
import { AcessoPage } from '../acesso/acesso';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController) {
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 100
    });
    loader.present();
    this.navCtrl.push(AcessoPermitidoPage.name);
  }

  avancaLogin(){
    this.navCtrl.push(AcessoPermitidoPage.name);
  }

  registrar(){
    this.navCtrl.push(RegisterPage.name);
  }
}
