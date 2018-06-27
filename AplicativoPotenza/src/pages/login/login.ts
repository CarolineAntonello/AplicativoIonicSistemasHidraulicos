import { AcessoPermitidoPage } from './../acesso-permitido/acesso-permitido';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { User } from '../../models/user';
import { LoadingController } from 'ionic-angular';
import{ AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }

  async login(user: User){
    if(user.email == null || user.password == null){
      let alert = this.alertCtrl.create({
        title: 'Alerta!',
        message: 'É preciso de um e-mail e senha para realizar o login!',
        buttons: [
          {
            text: 'Okay',
            handler: () => {
              console.log('Okay selecionado');
            }
          }
        ]
      });
      alert.present();
    }else {
      try{
        const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
        console.log(result);
          this.navCtrl.push(AcessoPermitidoPage.name);
      }
      catch(e){
        console.error(e);
      }
    }
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
