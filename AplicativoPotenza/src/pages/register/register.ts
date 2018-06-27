import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public nome: string = '';
  public email: string = '';
  public telefone: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  confirmacao(){
    if(this.nome == '' || this.email == ''){
      let alert = this.alertCtrl.create({
        title: 'Alerta!',
        message: 'É preciso ter um nome e um email para ser enviado uma solicitação!',
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
      let alert = this.alertCtrl.create({
        title: 'Confirme o envio',
        message: this.nome+ ' confirma o envio da solicitação para o email '+ this.email +'?',
        buttons: [
          {
            text: 'Não',
            role: 'cancel',
            handler: () => {
              console.log('Nao selecionado');
            }
          },
          {
            text: 'Sim',
            handler: () => {
              console.log('Sim selecionado');
            }
          }
        ]
      });
      alert.present();
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
