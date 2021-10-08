import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuItemComponent } from './menu-item.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [MenuItemComponent],
  exports: [MenuItemComponent]
})
export class MenuItemComponentModule {}
