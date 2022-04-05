import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../models/Menu';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menu: any[];
  merchant: string
  shownMenu: any;
  defaultSegment: string;
  activeSegment: string;
  searchValue: string;
  hideSections = false;

  constructor(public data: DataService, private titleService: Title, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.data.merchantId = this.route?.snapshot?.paramMap?.get('id');
    this.getMenu();
  }

  refresh(ev) {
    // setTimeout(() => {
    ev.detail.complete();
    this.ngOnInit();
    // }, 3000);
  }

  getMenu(): Menu[] {
    return this.data.getFullMenu(this.data.merchantId).subscribe(data => {
      if (data) {
        this.data.hideMenuHeader = false;
      }
      this.titleService.setTitle('LiveMenu | ' + data.name);
      this.merchant = data.name;
      this.data.merchantLogo = data.logo;
      this.menu = data.menu.categories;
      this.defaultSegment = this.menu[0].name;
      this.activeSegment = this.defaultSegment;
      this.shownMenu = this.menu[0].sections;
      this.sectionIsEmpty();
      this.getColors();
    });
  }


  segmentChanged(ev: any): void {
    this.clearSearchValue();
    this.activeSegment = ev.detail.value;
    for (var i in this.menu) {
      if (this.activeSegment === this.menu[i].name) {
        this.shownMenu = this.menu[i].sections
        this.sectionIsEmpty();
      }
    }
  }

  sectionIsEmpty(): void {
    for (let section of this.shownMenu) {
      section.hidden = false;
      let i = 0;
      section.items.forEach(element => {
        if (element.is_active === false) {
          i++;
        }
        if (i === section.items.length) {
          section.hidden = true;
        } else {
          section.hidden = false;
        }
      });
    }
  }

  search(ev: any): void {
    const searchValue = ev.target.value.toLowerCase();

    if (searchValue !== '') {
      this.hideSections = true;
    } else if (searchValue === '') {
      this.hideSections = false;
    }

    const items = []

    for (let i in this.shownMenu) {
      this.shownMenu[i].items.forEach(element => {
        items.push(element);
      });
    }

    items.forEach((item) => {
      item.hidden = false;
      const shouldShow = (item.name.toLowerCase().includes(searchValue) ||
        item.sub_head.toLowerCase().includes(searchValue) ||
        item.description.toLowerCase().includes(searchValue));
      if (!shouldShow) {
        item.hidden = true;
      } else {
        item.hidden = false;
      }
    });
  }

  clearSearchValue(): void {
    const ev = {
      target: {
        value: ''
      }
    };
    this.searchValue = ev.target.value;
    this.search(ev);
  }

  getColors() {
    if (this.data.merchantId === '621e4d25b83cd3c65f0f99ea') {
      // Rhinegeist
      (document.querySelector(':root') as HTMLElement).style.cssText = "--ion-color-primary: " + "#00263E";
    } else if (this.data.merchantId === '6189917c5cb1dd7c4aac10ed') {
      // Northern Row
      (document.querySelector(':root') as HTMLElement).style.cssText = "--ion-color-primary: " + "#DC4649";
    }
  }

}
