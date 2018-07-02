import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

@IonicPage()
@Component({
  selector: 'page-rx45-t',
  templateUrl: 'rx45-t.html',
})
export class Rx45TPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private document: DocumentViewer, private file: File,
    private transfer: FileTransfer, private platform: Platform) {
}

openLoadPdf(){
  const options: DocumentViewerOptions = {
  title : "Informativo Tecnico RX45T"
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
transfer.download('http://potenzaindustria.com.br/wp-content/uploads/2017/10/Informativo-T%C3%A9cnico-RX06T-1.pdf', path + 'InformativoTecnicoRX45T.pdf').then(entry =>{
//let url = entry.toURL();
this.document.viewDocument('assets/imgs/Rotator/RX06T/InformativoTecnicoRX06T.pdf', 'application.pdf', {});
});
}

}
