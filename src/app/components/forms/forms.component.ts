
import { Component, ViewChild } from '@angular/core';
import { FormService } from '../../services/form.service';
import { PersonalInfoFormComponent } from '../forms/personal-info-form/personal-info-form.component';
import { Plan } from '../../model/model';
import { adds } from '../../model/model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  @ViewChild(PersonalInfoFormComponent) personalInfoFormComponent!: PersonalInfoFormComponent;
  // selectedPlan!: { plan: Plan, isMonthly: boolean } ;
  selectedPlan: { plan: Plan, isMonthly: boolean } | null = null;
  selectedAddOns: adds[] = [];

  constructor(public formService: FormService) {}

  onFormValid(isValid: boolean) {
    // if (isValid) {
      this.formService.nextStep();
    // }
  }

  onPlanSelected(planData: { plan: Plan, isMonthly: boolean }) {
    this.selectedPlan = planData;
    // this.formService.nextStep();
  }

  onAddOnsSelected(addOns: adds[]) {
    this.selectedAddOns = addOns;
  }

  handleNextStep() {
    switch (this.formService.currentStep) {
      case 0:
        this.personalInfoFormComponent.validate();
        break;
      case 1:
        // this.onPlanSelected(this.selectedPlan);
        if (this.selectedPlan) {
          this.formService.nextStep();
        } else {
          alert("Please select a plan before proceeding.");
        }
        break;
        case 2:
          if (this.selectedAddOns.length > 0) {
            this.formService.nextStep();
          } else {
            alert("Please select at least one add-on.");
          }
          break;
      default:
        this.formService.nextStep();
        break;
    }
  }
}



