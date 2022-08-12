import { Component, OnInit } from '@angular/core';

@Component({
 /*  selector: '[app-servers]', */
 /* or this could also be '.app-servers' */
 selector: 'app-servers',
/*   template: `
   <app-server></app-server>
   <app-server></app-server>` , */
   templateUrl: `./servers.component.html`,
  
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() { }

  ngOnInit() {
  }

}
