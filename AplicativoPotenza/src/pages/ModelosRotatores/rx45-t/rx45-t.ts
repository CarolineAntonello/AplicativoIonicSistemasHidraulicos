import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the Rx45TPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rx45-t',
  templateUrl: 'rx45-t.html',
})
export class Rx45TPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController) {
  }

  favoritRotator() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Rotator',
      buttons: [
        {
          text: 'Comprar Rotator',
          role: 'comprar',
          handler: () => {
            console.log('Comprar clicked');
          }
        },
        {
          text: 'Favoritar',
          handler: () => {
            console.log('Favoritar clicked');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancelar',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Rx45TPage');
  }

}
