import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../models/Menu';
import { Message } from '../services/data.service';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() menu: Menu;

  constructor() { }

  ngOnInit() { }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
