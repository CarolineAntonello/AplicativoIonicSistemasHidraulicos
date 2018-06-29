import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

@IonicPage()
@Component({
  selector: 'page-gs2400-fm',
  templateUrl: 'gs2400-fm.html',
})
export class Gs2400FmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private document: DocumentViewer, private file: File,
    private transfer: FileTransfer, private platform: Platform) {
}

openLoadPdf(){
  const options: DocumentViewerOptions = {
  title : "Informativo Tecnico GS2400FM"
  };
  this.document.viewDocument('assets/imgs/Sucata/GS2400FM/InformativoTecnicoeGS2400FM.pdf','application/pdf', options);
}

downloadPdf(){
  let path = null;
  if(this.platform.is('ios')){
  path = this.file.documentsDirectory;
  }else{
  path = this.file.dataDirectory;
}

const transfer = this.transfer.create();
transfer.download('http://potenzaindustria.com.br/wp-content/uploads/2017/10/Informativo-T%C3%A9cnico-GS2400FM.pdf', path + 'InformativoTecnicoGS2400FM.pdf').then(entry =>{
let url = entry.toURL();
this.document.viewDocument('assets/imgs/Sucata/GS2400FM/InformativoTecnicoeGS2400FM.pdf', 'application.pdf', {});
});
}

}
