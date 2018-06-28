import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-gp25-r',
  templateUrl: 'gp25-r.html',
})
export class Gp25RPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private document: DocumentViewer, private file: File,
              private transfer: FileTransfer, private platform: Platform) {
  }

  openLoadPdf(){
    const options: DocumentViewerOptions = {
      title : "Informativo Tecnico GP25R"
    };
    this.document.viewDocument('assets/imgs/Florestal/GP25R/InformativoTecnicoGP25R.pdf','application/pdf', options);
  }

  downloadPdf(){
    let path = null;
    if(this.platform.is('ios')){
      path = this.file.documentsDirectory;
    }else{
      path = this.file.dataDirectory;
    }

    const transfer = this.transfer.create();
    transfer.download('http://potenzaindustria.com.br/wp-content/uploads/2017/11/Informativo-T%C3%A9cnico-GP25R.pdf', path + 'InformativoTecnicoGP25R.pdf').then(entry =>{
      let url = entry.toURL();
      this.document.viewDocument('assets/imgs/Florestal/GP25R/InformativoTecnicoGP25R.pdf', 'application.pdf', {});
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Gp25RPage');
  }

}
