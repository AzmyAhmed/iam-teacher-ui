import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AccessToJsonService } from '../../shared/service/access-to-json.service';
import { SharedService } from '../../shared/service/shared.service';

@Component({
  selector: 'app-teacher-sections',
  templateUrl: './teacher-sections.component.html',
  styleUrl: './teacher-sections.component.css'
})
export class TeacherSectionsComponent implements OnInit {
  fromJson: string = 'assets/jsonFiles/teacher-sections.json'
  sections: any = [];
  currentLinkData: { Serial: number | null, NameAr: string | null, NameEn: string | null } = { Serial: null, NameAr: null, NameEn: null };
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
