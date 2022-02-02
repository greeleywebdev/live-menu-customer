import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewMenuItemPageRoutingModule } from './view-menu-item-routing.module';

import { ViewMenuItemPage } from './view-menu-item.page';
import { HttpClientModule } from '@angular/common/http';

describe('ViewMenuItemPage', () => {
  let component: ViewMenuItemPage;
  let fixture: ComponentFixture<ViewMenuItemPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMenuItemPage ],
      imports: [IonicModule.forRoot(), ViewMenuItemPageRoutingModule, HttpClientModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMenuItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
