
import { Component, Output, EventEmitter } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-next-back-buttons',
  templateUrl: './next-back-buttons.component.html',
  styleUrls: ['./next-back-buttons.component.css']
})
export class NextBackButtonsComponent {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  constructor(public formService: FormService) {}

  nextStep() {
    this.next.emit();
  }

  prevStep() {
    this.prev.emit();
  }

  isFirstStep(): boolean {
    return this.formService.currentStep === 0;
  }

  isLastStep(): boolean {
    return this.formService.currentStep === 3;
  }
}

