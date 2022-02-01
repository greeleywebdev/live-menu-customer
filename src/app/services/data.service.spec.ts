import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { Menu } from '../models/Menu';
import { ENDPOINTS } from '../models/endpoints';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    service = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController); 
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getFullMenu function', () => {
    const dummyMenu: Menu = {
      _id: 'some ID',
      name: 'Business Name',
      logo: 'URL to company logo',
      address: {
        street_number: 111,
        street_name: '1910 Elm Street',
        city: 'Cincinnati',
        state: 'OH',
        zip_code: 45202
      },
      menu: {
        categories: [
          {
            name: 'Menu Sections',
            sections: [
              {
                name: 'Section Caetegories',
                items: [
                  {
                    name: 'Menu Item',
                    sub_head: '',
                    price: 8.0,
                    attributes: [
                      'ABV', 'IBU'
                    ],
                    description: 'This is a description of a menu item...',
                    is_active: true
                  }
                ]
              }
            ]
          }
        ]
      }
    };

    service.getFullMenu('6189917c5cb1dd7c4aac10ed').subscribe(menu => {
      expect(menu).toEqual(dummyMenu);
    });

    const request = httpMock.expectOne(ENDPOINTS.getFullMenu + '6189917c5cb1dd7c4aac10ed');

    expect(request.request.method).toBe('GET');

    request.flush(dummyMenu)
  });

  it('should have getMerchantBranding function', () => {
    expect(service.getMerchantBranding).toBeTruthy();
  });

});
