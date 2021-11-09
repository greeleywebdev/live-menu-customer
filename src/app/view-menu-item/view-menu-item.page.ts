import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'view-menu-item',
  templateUrl: './view-menu-item.page.html',
  styleUrls: ['./view-menu-item.page.scss'],
})
export class ViewMenuItemPage implements OnInit {

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // This gets id from url?
    const id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
