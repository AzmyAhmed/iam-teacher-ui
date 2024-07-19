import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-sidenave-header-container',
  templateUrl: './teacher-sidenave-header-container.component.html',
  styleUrl: './teacher-sidenave-header-container.component.css'
})
export class TeacherSidenaveHeaderContainerComponent {
  isSidenavOpen = false;
  sideNavClass = 'sidenavs website-sidenav';
  fromJson:string='assets/jsonFiles/iamteacher-teacher-links.json'
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
    this.sideNavClass = 'sidenavs  website-sidenav sidenavsopen'
  }
  closeSidenav() {
    this.isSidenavOpen = false;
    this.sideNavClass = 'sidenavs website-sidenav'
  }
}
