import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public nome: string = '';
  public email: string = '';
  public telefone: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  solicitar(){
    console.log(this.nome);
    console.log(this.email);
    console.log(this.telefone);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}