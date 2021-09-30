import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MenuItemComponentModule } from '../menu-item/menu-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuItemComponentModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
