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
    const primaryColor = '#DC4649';
    const secondaryColor = '#2D2926';
    const tertiaryColor = '#524F4C';
    (document.querySelector(':root') as HTMLElement).style.cssText = "--ion-color-primary: " + primaryColor + "; --ion-color-secondary: " + secondaryColor + "; --ion-color-tertiary: " + tertiaryColor + ";";
  }

}
