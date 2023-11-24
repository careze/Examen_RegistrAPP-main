import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.page.html',
  styleUrls: ['./visualizar.page.scss'],
})
export class VisualizarPage implements OnInit {

  asistencias: any[] = [];  

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.asistencias = this.obtenerAsistenciasDesdeLocalStorage();
  }

  verAsistencia(indice: number) {
    this.router.navigate(['/asistencia', indice]);
  }

  private obtenerAsistenciasDesdeLocalStorage(): any[] { 
    const asistenciasGuardadas = localStorage.getItem('asistencias');
    return asistenciasGuardadas ? JSON.parse(asistenciasGuardadas) : [];
  }
}