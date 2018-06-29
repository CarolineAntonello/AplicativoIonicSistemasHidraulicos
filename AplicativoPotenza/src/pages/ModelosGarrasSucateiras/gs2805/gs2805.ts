import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

@IonicPage()
@Component({
  selector: 'page-gs2805',
  templateUrl: 'gs2805.html',
})
export class Gs2805Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private document: DocumentViewer, private file: File,
    private transfer: FileTransfer, private platform: Platform) {
}

openLoadPdf(){
  const options: DocumentViewerOptions = {
  title : "Informativo Tecnico GS2805"
  };
  this.document.viewDocument('assets/imgs/Sucata/GS2805/InformativoTecnicoGS2805.pdf','application/pdf', options);
}

downloadPdf(){
  let path = null;
  if(this.platform.is('ios')){
  path = this.file.documentsDirectory;
  }else{
  path = this.file.dataDirectory;
}

const transfer = this.transfer.create();
transfer.download('http://potenzaindustria.com.br/wp-content/uploads/2017/10/Informativo-T%C3%A9cnico-GS2805.pdf', path + 'InformativoTecnicoGS2805.pdf').then(entry =>{
let url = entry.toURL();
this.document.viewDocument('assets/imgs/Sucata/GS2805/InformativoTecnicoGS2805.pdf', 'application.pdf', {});
});
}

}
