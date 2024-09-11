import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {
  username: string = 'Usuario';

  constructor(private router: Router, private navCtrl: NavController) { }

  navigateToRevisar() {
    this.router.navigate(['/revisar-asistencia']);
    }

  navigateToRegistrar() {
    this.router.navigate(['/registrar-asistencia']);
    }
  
    navigateToPerfil() {
      this.navCtrl.navigateForward('/perfil-alumno');
    }

    navigateToHome() {
      this.navCtrl.navigateRoot('/menu-principal');
    }

    logout() {

      this.navCtrl.navigateRoot('/inicio-sesion');
    }

  ngOnInit() {
  }

}
