import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';


@IonicPage()
@Component({
  selector: 'page-gp30-r',
  templateUrl: 'gp30-r.html',
})
export class Gp30RPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private document: DocumentViewer, private file: File,
    private transfer: FileTransfer, private platform: Platform) {
}

openLoadPdf(){
  const options: DocumentViewerOptions = {
  title : "Informativo Tecnico GP30R"
  };
  this.document.viewDocument('assets/imgs/Florestal/GP30R/InformativoTecnicoGP30R.pdf','application/pdf', options);
}

downloadPdf(){
  let path = null;
  if(this.platform.is('ios')){
  path = this.file.documentsDirectory;
  }else{
  path = this.file.dataDirectory;
}

const transfer = this.transfer.create();
transfer.download('http://potenzaindustria.com.br/wp-content/uploads/2017/10/Informativo-T%C3%A9cnico-GP30R.pdf', path + 'InformativoTecnicoGP30R.pdf').then(entry =>{
let url = entry.toURL();
this.document.viewDocument('assets/imgs/Florestal/GP30R/InformativoTecnicoGP30R.pdf', 'application.pdf', {});
});
}
}
