import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { HelperService } from 'src/app/services/helper.service';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { Asistencia } from 'src/app/models/asistencia';




@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage implements OnInit {

  resultQr: any;
  fotoUrl: string | undefined;


  infoQr:any[]=[];
  nombre:string = '';
  asignatura:string = "";
  docente:string = "";
  fecha:string = "";
  hora:string = "";
  leccion:string = "";
  sala:string = "";
  seccion:string = "";

  constructor(private activatedRoute:ActivatedRoute,
              private helper:HelperService,
              private asistenciaService:AsistenciaService,
              private router:Router
              ) { }


 ngOnInit() {
  }
  capturedImage: string | undefined;

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false, 
      resultType: CameraResultType.Uri,
    });

    this.capturedImage = image.webPath;
  }
      
/*   async scan() {
  try {
    const resultadoQr = (await BarcodeScanner.scan()).code;

    if (resultadoQr) {
      let infoQr;

      try {
        infoQr = JSON.parse(resultadoQr);

        if (infoQr) {
          if (
            infoQr.asignatura &&
            infoQr.docente &&
            infoQr.fecha &&
            infoQr.hora &&
            infoQr.leccion &&
            infoQr.sala &&
            infoQr.seccion
          ) {
            const nuevaAsistencia: Asistencia = {
              asignatura: infoQr.asignatura,
              docente: infoQr.docente,
              fecha: infoQr.fecha,
              hora: infoQr.hora,
              leccion: infoQr.leccion,
              sala: infoQr.sala,
              seccion: infoQr.seccion,
            };

            this.asistenciaService.guardarAsistencia([nuevaAsistencia]);

            const parametros = { dataQr: infoQr };
            this.helper.showModal(resultadoQr, parametros);
            this.router.navigate(['/asistencia']);
          } else {
            console.error('El código QR no tiene las propiedades necesarias.');
          }
        }
      } catch (error) {
        console.error('Error al parsear el código QR como JSON:', error);
      }
    }
  } catch (error) {
    console.error('Error al escanear el código QR:', error);
  }
}  */

async scan() {
  try {
    const resultadoQr = (await BarcodeScanner.scan()).code;

    if (resultadoQr) {
      let infoQr;

      try {
        infoQr = JSON.parse(resultadoQr);

        if (infoQr) {
          if (
            infoQr.asignatura &&
            infoQr.docente &&
            infoQr.fecha &&
            infoQr.hora &&
            infoQr.leccion &&
            infoQr.sala &&
            infoQr.seccion
          ) {
            const nuevaAsistencia: Asistencia = {
              asignatura: infoQr.asignatura,
              docente: infoQr.docente,
              fecha: infoQr.fecha,
              hora: infoQr.hora,
              leccion: infoQr.leccion,
              sala: infoQr.sala,
              seccion: infoQr.seccion,
            };

            // No necesitas un array aquí, simplemente guarda la asistencia
            this.asistenciaService.guardarAsistencia(nuevaAsistencia);

            const parametros = { dataQr: infoQr };
            this.helper.showModal(resultadoQr, parametros);
            this.router.navigate(['/asistencia']);
          } else {
            console.error('El código QR no tiene las propiedades necesarias.');
          }
        }
      } catch (error) {
        console.error('Error al parsear el código QR como JSON:', error);
      }
    }
  } catch (error) {
    console.error('Error al escanear el código QR:', error);
  }
}

}





