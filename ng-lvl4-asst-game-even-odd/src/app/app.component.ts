import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-lvl4-asst-game-ctrl';

  onintervalFired(firedNUmber: number) {
    console.log(firedNUmber);
  }
}
