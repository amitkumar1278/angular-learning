import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-lvl4-asst-game-ctrl';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onintervalFired(firedNUmber: number) {

    if (firedNUmber % 2 == 0) {
      this.evenNumbers.push(firedNUmber);
    } else {
      this.oddNumbers.push(firedNUmber);
    }
  }

  
}
