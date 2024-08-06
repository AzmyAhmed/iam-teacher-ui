import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { IWebsite_Sections_Data, WebsiteSectionsDataService } from '../website-sections-data.service';
import { ModalComponent } from '../../shared/component/modal/modal.component';
import { SnackBarService } from '../../shared/service/snack-bar.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
interface PricingPlan {
  title: string;
  price: number;
  discount: number;
  finalPrice: number;
  type: string;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule, SharedModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  @Input() pricingPlans: any = [];
  constructor(private snack: SnackBarService, private meta: Meta, public translate: TranslateService, private _WebsiteSectionsDataService: WebsiteSectionsDataService) {
    if (this.pricingPlans.length == 0) {
      this.Website_Sections_DataLoad();
    }
    this.getLinkFromAdmin();
  }
  adminLink: any = {};

  getLinkFromAdmin() {
    const link = sessionStorage.getItem("linkFromAdmin");
    this.adminLink = link ? JSON.parse(link) : null;
    console.log("adminLink To  Pricings = ", this.adminLink);
  }
  websiteSectionsDataObj: IWebsite_Sections_Data = <IWebsite_Sections_Data>{}
  stream: Subject<void> = new Subject();
  Website_Sections_DataLoad() {
    this.websiteSectionsDataObj.App_Links_Stp = 10;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic8 && res.azmestic8.length > 0) {
          this.pricingPlans = res.azmestic8;
        }
      }
        ,
        error => {
        }

      );
  }
  targetComponent: string = '';
  componentTitle: string = '';
  @ViewChild(ModalComponent) modal!: ModalComponent;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  openModalTemplate(targetComponent: string, componentTitle: string) {
    this.targetComponent = targetComponent;
    this.componentTitle = componentTitle;
    if (this.modal) {
      this.modal.content = this.modalTemplate;
      this.modal.open();
    } else {
      console.error(' Modal component is not available');
    }
  }
  PricingObj: any = {};
  onAddPricing() {
    this.PricingObj = {};
    this.PricingObj.Serial = -1;
    this.PricingObj.ReturnCode = 20;
    this.PricingObj.App_Links_Stp = 10;
  }
  onEditPricing(Pricing: any) {
    this.PricingObj = Pricing;
    this.PricingObj.ReturnCode = 30;
  }
  onDeletePricing(Pricing: any) {
    this.PricingObj = Pricing;
    this.PricingObj.ReturnCode = 40;

  }
  onConfirmPricing() {
    if (this.PricingObj) {
      this.PricingObj.IsActive = this.PricingObj.IsActive ? 1 : 0;
      this.PricingObj.DefaultStp = this.PricingObj.DefaultStp ? 1 : 0;
      this._WebsiteSectionsDataService.Website_Pricing_DataSave(this.PricingObj)
        .pipe(takeUntil(this.stream))
        .subscribe({
          next: (value) => {
            if (value.azmestic1.length > 0) {
              // Assuming value is an array
              this.Website_Sections_DataLoad();
              this.modal.close();
              this.snack.showDbSucessSnackBar("SUCCESS", "ALERT")
              this.PricingObj = {};
            }

          },
          error: (err) => this.snack.showDbErrorSnackBar("ERROR", "ALERT")
          ,
          complete: () => {

          }

        });
    }

  }
  onNumberChange(PricingObj: any) {
    if (PricingObj.Price && PricingObj.DiscountPercent > 0) {
      PricingObj.Discount = +((PricingObj.Price * PricingObj.DiscountPercent) / 100).toFixed(2);
      PricingObj.FinalPrice = PricingObj.Price - PricingObj.Discount;

    } else {
      PricingObj.Discount = 0;
      PricingObj.FinalPrice = PricingObj.Price - PricingObj.Discount;
    }

  }

  onDiscountChange(PricingObj: any) {
    if (PricingObj.Price && PricingObj.Discount > 0) {
      PricingObj.DiscountPercent = +(PricingObj.Discount * 100 / PricingObj.Price).toFixed(2);
    }

  }

}
