import { AjudaPage } from './../ajuda/ajuda';
import { PerguntasFrequentesPage } from './../perguntas-frequentes/perguntas-frequentes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcessoPage } from '../acesso/acesso';
import { SegmentosPage } from '../segmentos/segmentos';
import { NotificacoesPage } from '../notificacoes/notificacoes';


@IonicPage()
@Component({
  selector: 'page-acesso-permitido',
  templateUrl: 'acesso-permitido.html',
})
export class AcessoPermitidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcessoPermitidoPage');
  }
  
  openPage(){
    this.navCtrl.push(AjudaPage.name);
  }
  
  openSegmentosPage(){
    this.navCtrl.push(SegmentosPage.name);
  }
  
  openNotificacoesPage(){
    this.navCtrl.push(NotificacoesPage.name);
  }
  
  openPerguntasFrequentesPage(){
    this.navCtrl.push(PerguntasFrequentesPage.name);
  }
}
