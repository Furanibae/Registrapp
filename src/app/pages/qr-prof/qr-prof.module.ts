import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrProfPageRoutingModule } from './qr-prof-routing.module';

import { QrProfPage } from './qr-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrProfPageRoutingModule
  ],
  declarations: [QrProfPage]
})
export class QrProfPageModule {}
