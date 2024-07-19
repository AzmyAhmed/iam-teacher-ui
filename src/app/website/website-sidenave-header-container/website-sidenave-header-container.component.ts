import { Component } from '@angular/core';

@Component({
  selector: 'app-website-sidenave-header-container',
  templateUrl: './website-sidenave-header-container.component.html',
  styleUrl: './website-sidenave-header-container.component.css'
})
export class WebsiteSidenaveHeaderContainerComponent {
  isSidenavOpen = false;
  sideNavClass = 'sidenavs website-sidenav';
  fromJson: string = 'assets/jsonFiles/website-links.json'
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
    this.sideNavClass = 'sidenavs  website-sidenav sidenavsopen'
  }

  closeSidenav() {
    this.isSidenavOpen = false;
    this.sideNavClass = 'sidenavs website-sidenav'
  }
}
