import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-prof',
  templateUrl: './perfil-prof.page.html',
  styleUrls: ['./perfil-prof.page.scss'],
})
export class PerfilProfPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }
  ngOnInit() {
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
}
