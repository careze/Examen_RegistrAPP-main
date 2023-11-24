import { Injectable } from '@angular/core';
import { Asistencia } from '../models/asistencia';
import { Preferences } from '@capacitor/preferences';


@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  private storageKey = 'asistencias'; 

  constructor() { }



  guardarAsistencia(asistencia:any): void {
    
    const asistenciasGuardadas = this.obtenerAsistencia();

   
    asistenciasGuardadas .push(asistencia);

   
    localStorage.setItem(this.storageKey, JSON.stringify(asistenciasGuardadas ));
  }

  obtenerAsistencia(): any[] {
    const asistenciasGuardadas = localStorage.getItem(this.storageKey);
    console.log('Datos de asistencia obtenidos:', asistenciasGuardadas);
    return asistenciasGuardadas ? JSON.parse(asistenciasGuardadas) : [];
  }
 
}

