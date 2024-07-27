import { Component, TemplateRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModalComponent } from '../../shared/component/modal/modal.component';
import { Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';
import { Subject, takeUntil } from 'rxjs';
import { WebsiteSectionsDataService } from '../website-sections-data.service';
import { FormGroup } from '@angular/forms';
import { NotificationService } from '../../shared/service/notification.service';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-website-contactus',
  templateUrl: './website-contactus.component.html',
  styleUrl: './website-contactus.component.css'
})
export class WebsiteContactusComponent {
  componentTitle: string = ''
  targetComponent: string = '';
  websiteSectionsDataObj: Iapp_Sections_Data = <Iapp_Sections_Data>{}
  websiteSectionsDataResult: any[] = []
  socialMediaLinks: any[] = []
  @ViewChild(ModalComponent) modal!: ModalComponent;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  stream: Subject<void> = new Subject();
  constructor(private _WebsiteSectionsDataService: WebsiteSectionsDataService, public translate: TranslateService, private meta: Meta) {
    this.Website_Sections_DataLoad();
  }
  ngOnInit(): void {
    this.metaDescription();
  }

  Website_Sections_DataLoad() {
    this.websiteSectionsDataObj.App_Links_Stp = 9;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
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
