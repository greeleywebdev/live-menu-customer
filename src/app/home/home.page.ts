import { Component } from '@angular/core';
import { Menu } from '../models/Menu';
import { DataService } from '../services/data.service';

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
  hideSections = false;

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
      this.defaultSegment = this.menu[1].name;
      this.activeSegment = this.defaultSegment;
      this.shownMenu = this.menu[1].sections;
    });
  }

  segmentChanged(ev: any): void {
    this.activeSegment = ev.detail.value;
    for (var i in this.menu) {
      if (this.activeSegment === this.menu[i].name) {
        this.shownMenu = this.menu[i].sections
      }
    }
  }

  search(ev: any): void {
    const searchValue = ev.target.value.toLowerCase();

    if (searchValue !== '' || searchValue !== undefined || searchValue !== null) {
      console.log('true');
      this.hideSections = true;
    } else if (searchValue === '' || searchValue === undefined || searchValue === null) {
      console.log('false');
      this.hideSections = false;
    }

    const items = []

    for (let i in this.shownMenu) {
      this.shownMenu[i].list.forEach(element => {
        items.push(element);
      });
    }

    items.forEach((item) => {
      const shouldShow = (item.header.toLowerCase().includes(searchValue) ||
        item.subHeader.toLowerCase().includes(searchValue) ||
        item.subCategory1.toLowerCase().includes(searchValue) ||
        item.subCategory2.toLowerCase().includes(searchValue) ||
        item.description.toLowerCase().includes(searchValue));
      if (!shouldShow) {
        item.hidden = true;
      } else {
        item.hidden = false;
      }
    });
  }

}
