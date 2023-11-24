import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
              private alertService:AlertController,
              private loadingController:LoadingController,
              private toastController:ToastController,
              private modalController:ModalController
              ) { }

  sumar(n1:number,n2:number){
    var resultado = n1 + n2;
    return resultado;
  }


  async showAlert(msg:string,title:string){
      var alert = await this.alertService.create({cssClass:"alertClass",message:msg,header:title,buttons:['Aceptar']})
      await alert.present();
      return alert;
  }


  async showConfirm(msg:string,btn_si:string,btn_no:string){
    let promise = new Promise<boolean>(async (resolve) =>{
      var alert = await this.alertService.create({cssClass:"", message:msg,buttons:
      [
        {
          text:btn_si,
          handler:() =>{
            resolve(true);
          }
        },
        {
          text:btn_no,
          handler:() =>{
            resolve(false);
          }
       }
    ]
    });
    await alert.present();
  })
  return promise;
}



async showLoader(msg: string): Promise<HTMLIonLoadingElement> {
  const loader = await this.loadingController.create({
    cssClass: 'loaderClass',
    message: msg,
    translucent: true
  });

  await loader.present();

  return loader;
}
async dismissLoader(loader: HTMLIonLoadingElement): Promise<void> {
  if (loader) {
    await loader.dismiss();
  }
}

async showToast(msg:string, duracion:number = 2000){
  var toast = await this.toastController.create(
    {
      cssClass:"toastClass",
      message:msg,
      duration:duracion,
      position:"bottom",
      color:"primary"
    });
    await toast.present();
    return toast;
}

async showModal(componente: any, props: any = {}, hideable = true) {
  const modal = await this.modalController.create({
    component: componente,
    cssClass: 'custom-modal-slide-in',
    componentProps: props,
    backdropDismiss: hideable,
    mode: 'ios'
  });
  await modal.present();
}

showCustomModal(componente: any, props: any = {}, hideable = true) {
  this.showModal(componente, props, hideable);
}
}

