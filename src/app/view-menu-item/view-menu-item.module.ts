import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewMenuItemPage } from './view-menu-item.page';

import { IonicModule } from '@ionic/angular';

import { ViewMenuItemPageRoutingModule } from './view-menu-item-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMenuItemPageRoutingModule
  ],
  declarations: [ViewMenuItemPage]
})
export class ViewMenuItemPageModule {}
