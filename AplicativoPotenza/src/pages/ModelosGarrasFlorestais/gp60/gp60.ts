import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

@IonicPage()
@Component({
  selector: 'page-gp60',
  templateUrl: 'gp60.html',
})
export class Gp60Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private document: DocumentViewer, private file: File,
    private transfer: FileTransfer, private platform: Platform) {
}

openLoadPdf(){
  const options: DocumentViewerOptions = {
  title : "Informativo Tecnico GP60"
  };
  this.document.viewDocument('assets/imgs/Florestal/GP60/InformativoTecnicoGP60.pdf','application/pdf', options);
}

downloadPdf(){
  let path = null;
  if(this.platform.is('ios')){
  path = this.file.documentsDirectory;
  }else{
  path = this.file.dataDirectory;
}

const transfer = this.transfer.create();
transfer.download('http://potenzaindustria.com.br/wp-content/uploads/2017/10/Informativo-T%C3%A9cnico-GP60-1.pdf', path + 'InformativoTecnicoGP60.pdf').then(entry =>{
let url = entry.toURL();
this.document.viewDocument('assets/imgs/Florestal/GP60/InformativoTecnicoGP60.pdf', 'application.pdf', {});
});
}

}
