import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  
    navigateToPerfil() {
      this.navCtrl.navigateForward('/perfil-alumno');
    }

    navigateToHome() {
      this.navCtrl.navigateRoot('/menu-principal');
    }

    logout() {

      this.navCtrl.navigateRoot('/inicio-sesion');
    }
  goBack() {
    this.navCtrl.back();
  }
  ngOnInit() {
  }

}
