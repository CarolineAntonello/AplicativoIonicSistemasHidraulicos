import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'


@IonicPage()
@Component({
  selector: 'page-rp500',
  templateUrl: 'rp500.html',
})
export class Rp500Page {

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
    console.log('ionViewDidLoad Rp500Page');
  }

}
