import { Component, OnInit } from '@angular/core';

@Component({
  /*  selector: '[app-servers]', */
  /*  selector: '.app-servers', */
  selector: 'app-servers',
  /*   template: `
                  <app-server></app-server>
                  <app-server></app-server>`, */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewSErver = false;
  serverCReationStatus = 'No Serevr was Created!';
  serverName = 'Testserver';

  constructor() {
    setTimeout(() => {
      this.allowNewSErver = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onCreateServer() {
    this.serverCReationStatus = 'Server was Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
