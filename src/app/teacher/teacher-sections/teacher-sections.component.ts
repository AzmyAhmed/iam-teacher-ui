import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AccessToJsonService } from '../../shared/service/access-to-json.service';
import { SharedService } from '../../shared/service/shared.service';
export interface Section {
  serial: number;
  NameAr: string;
  NameEn: string;
  ImageSrc: string;
  // Add other properties if needed
}
@Component({
  selector: 'app-teacher-sections',
  templateUrl: './teacher-sections.component.html',
  styleUrl: './teacher-sections.component.css'
})
export class TeacherSectionsComponent implements OnInit {
  fromJson: string = 'assets/jsonFiles/teacher-sections.json'
  sections: any = [];
  currentLinkData: any = {};
  searchTerm: string = '';
  constructor(
    public translate: TranslateService, private sharedService: SharedService, private accessToJsonService: AccessToJsonService) {
  }
  ngOnInit(): void {
    this.getTeacherSections();
    this.sharedService.currentLinkData.subscribe(linkData => {
      this.currentLinkData = linkData;
      // Handle the change here, e.g., filter sections based on the serial, NameAr, or NameEn
    });
  }
  filteredSections(): Section[] {
    return this.sections.filter((section: Section) =>
      (section.serial !== undefined && section.serial.toString().includes(this.searchTerm)) ||
      (section.NameAr && section.NameAr.includes(this.searchTerm)) ||
      (section.NameEn && section.NameEn.includes(this.searchTerm))
    );
  }
  getTeacherSections() {
    this.accessToJsonService.getLinks(this.fromJson).subscribe(
      (data) => {
        this.sections = data.filter((ele: { IsActive: number; }) => ele.IsActive == 1);
      },
      (error) => {
        console.error('Error fetching JSON data', error);
      }
    );
  }
}
