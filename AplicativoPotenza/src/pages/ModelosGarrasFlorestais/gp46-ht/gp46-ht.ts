import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

@IonicPage()
@Component({
  selector: 'page-gp46-ht',
  templateUrl: 'gp46-ht.html',
})
export class Gp46HtPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private document: DocumentViewer, private file: File,
    private transfer: FileTransfer, private platform: Platform) {
}

openLoadPdf(){
  const options: DocumentViewerOptions = {
  title : "Informativo Tecnico GP46HT"
  };
  this.document.viewDocument('assets/imgs/Florestal/GP46HT/InformativoTecnicoGP46HT.pdf','application/pdf', options);
}

downloadPdf(){
  let path = null;
  if(this.platform.is('ios')){
  path = this.file.documentsDirectory;
  }else{
  path = this.file.dataDirectory;
}

const transfer = this.transfer.create();
transfer.download('http://potenzaindustria.com.br/wp-content/uploads/2017/10/Informativo-T%C3%A9cnico-GP46HT-1.pdf', path + 'InformativoTecnicoGP46HT.pdf').then(entry =>{
let url = entry.toURL();
this.document.viewDocument('assets/imgs/Florestal/GP46HT/InformativoTecnicoGP46HT.pdf', 'application.pdf', {});
});
}

}
