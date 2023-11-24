import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { Asistencia } from 'src/app/models/asistencia';
import { AsistenciaService } from 'src/app/services/asistencia.service';


import { ActivatedRoute } from '@angular/router';
import { BarcodeScanner } from 'capacitor-barcode-scanner';



@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  asistencias: any;
  asignatura: string = "";
  docente: string = "";
  fecha: string = "";
  hora: string = "";
  leccion: string = "";
  sala: string = "";
  seccion: string = "";

  constructor(
    private helperService: HelperService,
    private router: Router,
    private asistenciaServices: AsistenciaService
  ) {}

  ngOnInit() {
    this.cargarAsistencia();
  }
  async cargarAsistencia() {
    console.log('Cargando asistencia...');
    this.asistencias = await this.asistenciaServices.obtenerAsistencia();
  
    if (this.asistencias && this.asistencias.length > 0) {
      const primeraAsistencia = this.asistencias[0];
      console.log('Datos de la primera asistencia:', primeraAsistencia);
      this.asignatura = primeraAsistencia.asignatura;
      this.docente = primeraAsistencia.docente;
      this.fecha = primeraAsistencia.fecha;
      this.hora = primeraAsistencia.hora;
      this.leccion = primeraAsistencia.leccion;
      this.sala = primeraAsistencia.sala;
      this.seccion = primeraAsistencia.seccion;
    }
  }
   }