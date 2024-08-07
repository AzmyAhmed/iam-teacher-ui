import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-website-clients',
  templateUrl: './website-clients.component.html',
  styleUrl: './website-clients.component.css'
})
export class WebsiteClientsComponent {
  @Input() appSectionsDataResult: any = [];
  clients:any=[]
}
