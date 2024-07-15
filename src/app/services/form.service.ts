
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private currentStepSubject = new BehaviorSubject<number>(0);
  currentStep = 0;

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
      this.currentStepSubject.next(this.currentStep);
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.currentStepSubject.next(this.currentStep);
    }
  }

}



