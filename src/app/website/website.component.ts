import { Component } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrl: './website.component.css'
})
export class WebsiteComponent {
  fromJson: string = 'assets/jsonFiles/website-links.json';
  fromModule: string = 'website';
}
