import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

@IonicPage()
@Component({
  selector: 'page-sg2004',
  templateUrl: 'sg2004.html',
})
export class Sg2004Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private document: DocumentViewer, private file: File,
    private transfer: FileTransfer, private platform: Platform) {
}

openLoadPdf(){
  const options: DocumentViewerOptions = {
  title : "Informativo Tecnico SG2004"
  };
  this.document.viewDocument('assets/imgs/Sucata/SG2004/InformativoTecnicoSG2004.pdf','application/pdf', options);
}

downloadPdf(){
  let path = null;
  if(this.platform.is('ios')){
  path = this.file.documentsDirectory;
  }else{
  path = this.file.dataDirectory;
}

const transfer = this.transfer.create();
transfer.download('http://potenzaindustria.com.br/wp-content/uploads/2017/10/Informativo-T%C3%A9cnico-SG2004.pdf', path + 'InformativoTecnicoSG2004.pdf').then(entry =>{
let url = entry.toURL();
this.document.viewDocument('assets/imgs/Sucata/SG2004/InformativoTecnicoSG2004.pdf', 'application.pdf', {});
});
}

}
