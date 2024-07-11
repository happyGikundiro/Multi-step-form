import { Component } from '@angular/core';
import { Plan } from '../../../model/model';

@Component({
  selector: 'app-select-plan-form',
  templateUrl: './select-plan-form.component.html',
  styleUrl: './select-plan-form.component.css'
})
export class SelectPlanFormComponent {
  planOptions:Plan[] = [
    {
      plan: 'Arcade',
      icon: '/assets/images/icon-arcade.svg',
      duration: {
        monthly: {
          price: '$9/mo',
          addToTotal: 9,
          promo: '',
        },
        yearly: {
          price: '$90/yr',
          addToTotal: 90,
          promo: '2 months free',
        },
      },
    },
    {
      plan: 'Advanced',
      icon: '/assets/images/icon-advanced.svg',
      duration: {
        monthly: {
          price: '$12/mo',
          addToTotal: 12,
          promo: '',
        },
        yearly: {
          price: '$120/yr',
          addToTotal: 120,
          promo: '2 months free',
        },
      },
    },
    {
      plan: 'Pro',
      icon: '/assets/images/icon-pro.svg',
      duration: {
        monthly: {
          price: '$15/mo',
          addToTotal: 15,
          promo: '',
        },
        yearly: {
          price: '$150/yr',
          addToTotal: 150,
          promo: '2 months free',
        },
      },
    },
  ];
}
