import { DevInfoComponent } from './../../components/dev-info/dev-info.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async openDevInfo(){
    const modal = await this.modalController.create({
      component: DevInfoComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
