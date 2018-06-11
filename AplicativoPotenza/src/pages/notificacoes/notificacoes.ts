import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-notificacoes',
  templateUrl: 'notificacoes.html',
})
export class NotificacoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController) {
  }

  presentConfirmManutencao() {
    let alert = this.alertCtrl.create({
      title: 'Confirme o lembrete',
      message: 'Deseja criar um lembrete para manutenção?',
      inputs: [
        {
          name: 'modelo do produto',
          placeholder: 'modelo do produto'
        }
      ],
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

  presentConfirmGarantia() {
    let alert = this.alertCtrl.create({
      title: 'Confirme o lembrete',
      message: 'Deseja criar um lembrete para tempo de garantia?',
      inputs: [
        {
          name: 'modelo do produto',
          placeholder: 'modelo do produto',
        }
      ],
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

  presentConfirmProdutos() {
    let alert = this.alertCtrl.create({
      title: 'Confirme o lembrete',
      message: 'Deseja criar um lembrete para novidades em produtos?',
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacoesPage');
  }

}
