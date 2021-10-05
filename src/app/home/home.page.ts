import { Component } from '@angular/core';
import { Menu } from '../models/Menu';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menu: any[];
  shownMenu: any;
  defaultSegment: string;
  activeSegment: string;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getMenu();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMenu(): Menu[] {
    return this.data.getMenuItems().subscribe(data => {
      this.menu = data.categories;
      this.defaultSegment = this.menu[1].categoryName;
      this.activeSegment = this.defaultSegment;
      this.shownMenu = this.menu[1].categoryList;
    });
  }

  segmentChanged(ev: any): void {
    this.activeSegment = ev.detail.value;
    for (var i in this.menu) {
      if (this.activeSegment === this.menu[i].categoryName) {
        this.shownMenu = this.menu[i].categoryList
      }
    }
  }

}
