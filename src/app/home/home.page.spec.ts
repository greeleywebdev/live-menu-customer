import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Data, RouterModule } from '@angular/router';
import { MenuItemComponentModule } from '../menu-item/menu-item.module';

import { HomePage } from './home.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from '../services/data.service';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let data: DataService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), MenuItemComponentModule, HttpClientModule, HttpClientTestingModule, RouterModule.forRoot([])],
      providers: [DataService],
    }).compileComponents();

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    data = new DataService(httpClient);

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('exists', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  describe('menu', () => {
    it('is gotten from the service', () => {
      const merchantId = '6189917c5cb1dd7c4aac10ed ';
      data.getFullMenu(merchantId).subscribe((x) => {
        expect(x);
      });
    
    });
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

