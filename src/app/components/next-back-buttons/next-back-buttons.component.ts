import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-next-back-buttons',
  templateUrl: './next-back-buttons.component.html',
  styleUrl: './next-back-buttons.component.css'
})
export class NextBackButtonsComponent {

  constructor(public formservice: FormService){}

  nextStep(){
    this.formservice.nextStep();
  }

  prevStep(){
    this.formservice.prevStep()
  }

  isFirstStep():boolean{
     return this.formservice.currentStep === 0;
  }

  isLastStep():boolean{
    return this.formservice.currentStep === 3;
  }

}
