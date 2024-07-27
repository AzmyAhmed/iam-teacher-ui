import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';
import { CommonModule } from '@angular/common';
import { WebsiteSectionsDataService } from '../website-sections-data.service';

@Component({
  selector: 'app-website-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './website-features.component.html',
  styleUrl: './website-features.component.css'
})
export class WebsiteFeaturesComponent {
  stream: Subject<void> = new Subject();
  websiteSectionsDataObj: Iapp_Sections_Data = <Iapp_Sections_Data>{}
  websiteSectionsDataResult: any[] = [];
  generalFeatures = [
    { icon: 'fa fa-cogs', title: 'Customizable', description: 'Easily customizable to fit your needs.' },
    { icon: 'fa fa-mobile', title: 'Responsive', description: 'Fully responsive design for all devices.' },
    { icon: 'fa fa-lock', title: 'Secure', description: 'Top-notch security features.' },
    { icon: 'fa fa-bullhorn', title: 'Marketing Tools', description: 'Built-in marketing tools.' },
    { icon: 'fa fa-bar-chart', title: 'Analytics', description: 'Comprehensive analytics.' },
    { icon: 'fa fa-users', title: 'User Management', description: 'Manage users efficiently.' },
    { icon: 'fa fa-cloud', title: 'Cloud Integration', description: 'Seamless cloud integration.' },
    { icon: 'fa fa-headphones', title: 'Support', description: '24/7 customer support.' }
  ];

  teacherFeatures = [
    { icon: 'fa fa-chalkboard-teacher', title: 'Class Management', description: 'Manage classes effortlessly.' },
    { icon: 'fa fa-calendar', title: 'Schedule', description: 'Schedule classes and events.' },
    { icon: 'fa fa-book', title: 'Curriculum', description: 'Design and manage curriculum.' },
    { icon: 'fa fa-graduation-cap', title: 'Student Tracking', description: 'Track student progress.' }
  ];
  constructor(private _websiteSectionsDataService: WebsiteSectionsDataService, public translate: TranslateService) {
    this.app_Sections_DataLoad();
  }

  app_Sections_DataLoad() {
    this.websiteSectionsDataObj.App_Links_Stp = 3;
    this._websiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic1 && res.azmestic1.length > 0) {
          this.websiteSectionsDataResult = res.azmestic1;
        }
      }
        ,
        error => {
        }

      );
  }
}
