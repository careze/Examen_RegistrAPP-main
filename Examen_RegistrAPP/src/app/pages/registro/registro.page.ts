import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  correo: string = '';
  contrasena: string = '';
  confirmarContrasena: string = '';
  genero: string = '';

  constructor(private auth: AngularFireAuth,
               private router: Router,
               private storage:StorageService) {}

  async registro() {

    try {
      if (this.nombre === '' || this.correo === '' || this.contrasena === '' || this.confirmarContrasena === '' || this.genero === '') {
        alert('Todos los campos son obligatorios');
        return;
      }

      if (this.contrasena !== this.confirmarContrasena) {
        alert('Las contraseñas no coinciden');
        return;
      }
     
      const userCredential = await this.auth.createUserWithEmailAndPassword(this.correo, this.contrasena);

      if (userCredential.user) {
        var user = [{
          correo: this.correo,
          nombre: this.nombre,
          genero:this.genero
        }]
        this.storage.guardarUsuario(user);
        alert('Registro exitoso');
        this.router.navigateByUrl('/login');
      } else {
        alert('No se obtuvo un usuario después del registro.');
      }
    } catch (error) {
    }
  }
}
