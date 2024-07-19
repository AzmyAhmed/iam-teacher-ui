import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-protofilio-sidenave-header-container',
  templateUrl: './teacher-protofilio-sidenave-header-container.component.html',
  styleUrl: './teacher-protofilio-sidenave-header-container.component.css'
})
export class TeacherProtofilioSidenaveHeaderContainerComponent {
  isSidenavOpen = false;
  sideNavClass = 'sidenavs website-sidenav';
  fromJson: string = 'assets/jsonFiles/teacher-protofilio-links.json'
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
    this.sideNavClass = 'sidenavs  website-sidenav sidenavsopen'
  }

  closeSidenav() {
    this.isSidenavOpen = false;
    this.sideNavClass = 'sidenavs website-sidenav'
  }
}
