
import { Component, Input } from '@angular/core';
import { Plan, adds } from '../../../model/model';
import { Router } from '@angular/router';
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-summary-form',
  templateUrl: './summary-form.component.html',
  styleUrls: ['./summary-form.component.css']
})
export class SummaryFormComponent {
  @Input() selectedPlan!: { plan: Plan, isMonthly: boolean };
  @Input() selectedAddOns: adds[] = [];

  constructor(private router: Router, private formService: FormService){}

  getPlanPrice(): string {
    return this.selectedPlan.isMonthly ? this.selectedPlan.plan.duration.monthly.price : this.selectedPlan.plan.duration.yearly.price;
  }

  getAddOnPrice(addon: adds): string {
    return this.selectedPlan.isMonthly ? addon.duration.monthly.price : addon.duration.yearly.price;
  }

  getTotalPrice(): string {
    const planPrice = this.selectedPlan.isMonthly ? this.selectedPlan.plan.duration.monthly.addToTotal : this.selectedPlan.plan.duration.yearly.addToTotal;
    const addOnTotal = this.selectedAddOns.reduce((total, addon) => {
      return total + (this.selectedPlan.isMonthly ? addon.duration.monthly.addToTotal : addon.duration.yearly.addToTotal);
    }, 0);
    return `$${planPrice + addOnTotal}/${this.selectedPlan.isMonthly ? 'mo' : 'yr'}`;
  }

  changePlan() {
  }
}
