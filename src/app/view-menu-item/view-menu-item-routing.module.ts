import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMenuItemPage } from './view-menu-item.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMenuItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMenuItemPageRoutingModule {}
