import { DevInfoComponent } from './dev-info/dev-info.component';
import { DevCardComponent } from './dev-card/dev-card.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DevCardComponent, DevInfoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [DevCardComponent, DevInfoComponent]
})
export class ComponentsModule { }
