
import { Component, ViewChild } from '@angular/core';
import { FormService } from '../../services/form.service';
import { PersonalInfoFormComponent } from '../forms/personal-info-form/personal-info-form.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  @ViewChild(PersonalInfoFormComponent) personalInfoFormComponent!: PersonalInfoFormComponent;

  constructor(public formService: FormService) {}

  onFormValid(isValid: boolean) {
    if (isValid) {
      this.formService.nextStep();
    }
  }

  handleNextStep() {
    switch (this.formService.currentStep) {
      case 0:
        this.personalInfoFormComponent.validate();
        break;
      // Add cases for other form components if needed
      default:
        this.formService.nextStep();
        break;
    }
  }
}



