import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  
  login(email: string){
    if(!email){
      alert('Porfavor ingresa correo valido');
      return;
    }
    if(email.endsWith('@duocuc.cl')){
      this.navCtrl.navigateForward('/menu-principal');

    }
    else if (email.endsWith('@profduocuc.cl')){
      this.navCtrl.navigateForward('/menu-profesor');
    }
    else{
      alert('Tipo correo invalido')
    }

}
  
  ngOnInit() {
  }

}
