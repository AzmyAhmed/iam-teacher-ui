import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface PricingPlan {
  title: string;
  price: number;
  discount: number;
  finalPrice: number;
  type: string;
}

@Component({
  selector: 'app-pricing',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  pricingPlans: PricingPlan[] = [
    {
      title: 'Limited Features Monthly',
      price: 600,
      discount: 20,
      finalPrice: 600 * (1 - 0.20),
      type: 'limited-monthly'
    },
    {
      title: 'Limited Features Yearly',
      price: 3000,
      discount: 30,
      finalPrice: 3000 * (1 - 0.30),
      type: 'limited-yearly'
    },
    {
      title: 'Full Features Monthly',
      price: 1200,
      discount: 30,
      finalPrice: 1200 * (1 - 0.30),
      type: 'full-monthly'
    },
    {
      title: 'Full Features Yearly',
      price: 6000,
      discount: 40,
      finalPrice: 6000 * (1 - 0.40),
      type: 'full-yearly'
    },
    {
      title: 'Full Features Permanently',
      price: 30000,
      discount: 45,
      finalPrice: 30000 * (1 - 0.45),
      type: 'full-permanently'
    }
  ];
}
