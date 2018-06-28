import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AjudaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajuda',
  templateUrl: 'ajuda.html',
})
export class AjudaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjudaPage');
  }

  slides = [
    {
      title: "Bem vindo ao PotenzaApp",
      description: "Aqui você encontra os catálogo de peças, manuais de usuário e informativos técnicos para seu modelo de produto.",
      //image: "https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-1.png",
      image : "assets/imgs/AjudaImg1.jpg"
    },
    {
      title: "Como faço para ter acesso?",
      description: "Para acessar o aplicativo é preciso de um login liberado pela empresa, caso não tenha, é só ir clicar no botão registrar e preencher os campos que e a empresa será informada pela sua solicitação!",
      //image: "https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-2.png",
      image : "assets/imgs/AjudaImg2.jpg"
    },
    {
      title: "Como encontro os manuais, catálogos e informativos?",
      description: "Basta puxar o menu da lateral esquerda e escolher o que precisa, estão separados em segmentos para melhor lhe atender e facilitar.",
      //image: "https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-3.png",
      image : "assets/imgs/AjudaImg3.jpg"
    }
  ];

}
