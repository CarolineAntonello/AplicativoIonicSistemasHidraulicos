import { ModeloRotatorPage } from './../modelo-rotator/modelo-rotator';
import { ModeloProdutoPage } from './../modelo-produto/modelo-produto';
import { GarantiaProdutoPage } from './../garantia-produto/garantia-produto';
import { ManutencaoProdutoPage } from './../manutencao-produto/manutencao-produto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-perguntas-frequentes',
  templateUrl: 'perguntas-frequentes.html',
})
export class PerguntasFrequentesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntasFrequentesPage');
  }

  openManutencao(){
    this.navCtrl.push(ManutencaoProdutoPage.name);
  }

  openGarantia(){
    this.navCtrl.push(GarantiaProdutoPage.name);
  }

  openModelo(){
    this.navCtrl.push(ModeloProdutoPage.name);
  }

  openModeloRotator(){
    this.navCtrl.push(ModeloRotatorPage.name);
  }
}
