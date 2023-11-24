import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  nombre:any;
  correo:any;
  genero:any;


  constructor(
            private alertService: AlertController,
            private router: Router,
            private helperService: HelperService,
            private storage:StorageService,
            private auth:AngularFireAuth,
            private helper:HelperService,


   
  ) { }

  ngOnInit() {

    this.cargarUsuario();
  }

  async logout() {
    const confirmLogout = await this.helperService.showConfirm('¿Estás seguro de que deseas salir?', 'Sí', 'No');
    if (confirmLogout) {
     
      this.router.navigate(['/home']);
    }
  }
  async saveProfileChanges() {
    await this.helperService.showToast('¡Felicidades, encontraste un huevo de Pascua secreto!');
  }

  async cargaUsaurios(){
    console.log("USUARIOS", await this.storage.obtenerUsuarios());
  }


async cargarUsuario() {
  console.log("USUARIO STORAGE", await this.storage.obtenerUsuarios());
  console.log("PROPIEDAD SERVICE STORAGE", this.storage.correoUsuario);

  const currentUser = await this.auth.currentUser;

  if (currentUser) {
    const usuarios = await this.storage.obtenerUsuarios();

    const user = usuarios.find(e => e.correo === currentUser.email);

    if (user) {
      console.log("hola");
      this.nombre = user.nombre;
      this.correo = currentUser.email;
      this.genero = user.genero || '';
      console.log('Nombre:', this.nombre);
      console.log('Correo:', this.correo);
      console.log('Género:', this.genero);
    } else {
    
    }
  } else {
   
  }
}














 }