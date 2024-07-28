import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Meta } from '@angular/platform-browser';
import { Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';
import { WebsiteSectionsDataService } from '../website-sections-data.service';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-website-contactus',
  templateUrl: './website-contactus.component.html',
  styleUrl: './website-contactus.component.css'
})
export class WebsiteContactusComponent {
  @Input() websiteSectionsDataResult: any[] = []
  constructor(private meta: Meta,public translate: TranslateService, private _WebsiteSectionsDataService: WebsiteSectionsDataService) {
    if (this.websiteSectionsDataResult.length == 0) {
      this.Website_Sections_DataLoad();
    }

  }
  websiteSectionsDataObj: Iapp_Sections_Data = <Iapp_Sections_Data>{}
  stream: Subject<void> = new Subject();
  Website_Sections_DataLoad() {
    this.websiteSectionsDataObj.App_Links_Stp = 9;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic6 && res.azmestic6.length > 0) {
          this.websiteSectionsDataResult = res.azmestic6;
        }
      }
        ,
        error => {
        }

      );
  }
  ngOnInit(): void {
    this.metaDescription();
  }
  sendEmail(e: Event) {
    // e.preventDefault();

    // emailjs.sendForm('service_r10lcgd', 'template_366diwi', e.target as HTMLFormElement, '5fN1GjW87249AppkL')
    //   .then((result: EmailJSResponseStatus) => {
    //     console.log(result.text);
    //     this.notify.showSuccess('Email sent successfully!', 'Success')
    //     this.router.navigate(['/main']);
    //   }, (error) => {
    //     console.log(error.text);
    //     this.notify.showError('Failed to send email. Please try again later.', 'Failed')

    //   });

  }
  metaDescription() {
    this.meta.updateTag({ name: 'description', content: 'azmy ahmed software engineer' });
  }

}
