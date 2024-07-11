import { Component } from '@angular/core';

@Component({
  selector: 'app-step-sidebar',
  templateUrl: './step-sidebar.component.html',
  styleUrl: './step-sidebar.component.css'
})
export class StepSidebarComponent {
  steps = [
    {
      step: 1,
      description:"YOUR INFO"
    },
    {
      step: 2,
      description:"SELECT PLAN"
    },
    {
      step: 3,
      description:"ADD-ONS"
    },
    {
      step: 4,
      description:"SUMMARY"
    },
  ]
}
