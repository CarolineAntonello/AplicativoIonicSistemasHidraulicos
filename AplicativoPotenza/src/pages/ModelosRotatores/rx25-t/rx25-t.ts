import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

@IonicPage()
@Component({
  selector: 'page-rx25-t',
  templateUrl: 'rx25-t.html',
})
export class Rx25TPage {

  constructor(public navCtrl: NavController,
    public document: DocumentViewer, public file: File,
    public transfer: FileTransfer, public platform: Platform) {
}

openLoadPdf(){
  const options: DocumentViewerOptions = {
  title : "Informativo Tecnico RX25T"
  };
  this.document.viewDocument('assets/imgs/Rotator/RX06T/InformativoTecnicoRX06T.pdf','application/pdf', options);
}

downloadPdf(){
  let path = null;
  if(this.platform.is('ios')){
  path = this.file.documentsDirectory;
  }else{
  path = this.file.dataDirectory;
}

const transfer = this.transfer.create();
transfer.download('http://potenzaindustria.com.br/wp-content/uploads/2017/10/Informativo-T%C3%A9cnico-RX06T-1.pdf', path + 'InformativoTecnicoRX25T.pdf').then(entry =>{
//let url = entry.toURL();
this.document.viewDocument('assets/imgs/Rotator/RX06T/InformativoTecnicoRX06T.pdf', 'application.pdf', {});
});
}

}
