import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

@IonicPage()
@Component({
  selector: 'page-gg1224',
  templateUrl: 'gg1224.html',
})
export class Gg1224Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private document: DocumentViewer, private file: File,
    private transfer: FileTransfer, private platform: Platform) {
}

openLoadPdf(){
  const options: DocumentViewerOptions = {
  title : "Informativo Tecnico GG1224"
  };
  this.document.viewDocument('assets/imgs/Sucata/GG1224/InformativoTecnicoGG1225.pdf','application/pdf', options);
}

downloadPdf(){
  let path = null;
  if(this.platform.is('ios')){
  path = this.file.documentsDirectory;
  }else{
  path = this.file.dataDirectory;
}

const transfer = this.transfer.create();
transfer.download('http://potenzaindustria.com.br/wp-content/uploads/2017/12/Informativo-T%C3%A9cnico-GG1225.pdf', path + 'InformativoTecnicoGG1224.pdf').then(entry =>{
//let url = entry.toURL();
this.document.viewDocument('assets/imgs/Sucata/GG1224/InformativoTecnicoGG1225.pdf', 'application.pdf', {});
});
}

}
