import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-profesor',
  templateUrl: './menu-profesor.page.html',
  styleUrls: ['./menu-profesor.page.scss'],
})

export class MenuProfesorPage implements OnInit {
  username: string = 'Usuario';

  constructor(private router: Router,private navCtrl: NavController) {
       }

  navigateToRevisarProfesor() {
    this.router.navigate(['/revisar-asistencia-profesor']);
    }

  navigateToRegistrarProfesor() {
    this.router.navigate(['/registrar-asistencia-profesor']);
    }
  
    navigateToPerfil() {
      this.navCtrl.navigateForward('/perfil-prof');
    }
  
    navigateToHome() {
      this.navCtrl.navigateRoot('/menu-profesor');
    }
  
    logout() {
  
      this.navCtrl.navigateRoot('/inicio-sesion');
    }

  ngOnInit() {
  }

}