import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-qr-prof',
  templateUrl: './qr-prof.page.html',
  styleUrls: ['./qr-prof.page.scss'],
})
export class QrProfPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  navigateToPerfil() {
    this.navCtrl.navigateForward('/perfil-prof');
  }

  navigateToHome() {
    this.navCtrl.navigateRoot('/menu-profesor');
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
