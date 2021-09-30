import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { MenuItemComponent } from './menu-item.component';

describe('MessageComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemComponent ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
