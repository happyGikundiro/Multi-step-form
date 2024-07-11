import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  currentStep = 0;

  constructor() { }

  nextStep(){
    if(this.currentStep < 4){
      this.currentStep++
    }
  }

  prevStep(){
    if(this.currentStep > 0){
      this.currentStep--
    }
  }
}
