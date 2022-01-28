import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(public data: DataService) {
    this.getColors();
  }

  getColors(): void {
    this.data.getMerchantBranding().subscribe(data  => {
      (document.querySelector(':root') as HTMLElement).style.cssText = "--ion-color-primary: " + data.primaryColor + "; --ion-color-secondary: " + data.secondaryColor + "; --ion-color-tertiary: " + data.tertiaryColor + ";";
    });
  }

}
