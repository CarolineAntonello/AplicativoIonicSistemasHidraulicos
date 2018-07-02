import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

@IonicPage()
@Component({
  selector: 'page-rp500',
  templateUrl: 'rp500.html',
})
export class Rp500Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private document: DocumentViewer, private file: File,
    private transfer: FileTransfer, private platform: Platform) {
}

openLoadPdf(){
  const options: DocumentViewerOptions = {
  title : "Informativo Tecnico RP500"
  };
  this.document.viewDocument('assets/imgs/Rotator/RP500/InformativoTecnicoRP500.pdf','application/pdf', options);
}

downloadPdf(){
  let path = null;
  if(this.platform.is('ios')){
  path = this.file.documentsDirectory;
  }else{
  path = this.file.dataDirectory;
}

const transfer = this.transfer.create();
transfer.download('http://potenzaindustria.com.br/wp-content/uploads/2018/02/Informativo-T%C3%A9cnico-RP500.pdf', path + 'InformativoTecnicoRP500.pdf').then(entry =>{
//let url = entry.toURL();
this.document.viewDocument('assets/imgs/Rotator/RP500/InformativoTecnicoRP500.pdf', 'application.pdf', {});
});
}
}
