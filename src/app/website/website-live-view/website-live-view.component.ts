import { Component, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-website-live-view',
  standalone: true,
  imports: [],
  templateUrl: './website-live-view.component.html',
  styleUrl: './website-live-view.component.css'
})
export class WebsiteLiveViewComponent {
  @Input() videoSrc: string='';
  sanitizedVideoSrc!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.sanitizeUrl(this.videoSrc);
  }

  ngOnChanges(): void {
    this.sanitizeUrl(this.videoSrc);
  }

  sanitizeUrl(url: string): void {
    this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}