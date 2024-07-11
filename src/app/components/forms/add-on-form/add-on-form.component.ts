import { Component } from '@angular/core';
import { adds } from '../../../model/model';

@Component({
  selector: 'app-add-on-form',
  templateUrl: './add-on-form.component.html',
  styleUrl: './add-on-form.component.css'
})
export class AddOnFormComponent {
  addsOptions: adds[]=[
 {   
    addon:'Online service',
    description: 'Access to multiplayer games',
    duration:{
      monthly:{
        price: '+$1/mo',
        addToTotal: 1,
      },
      yearly:{
        price: '+$10/yr',
        addToTotal: 10,
      }
    }
  },
  {   
    addon:'Larger storage',
    description: 'Extra 1TB of cloud save',
    duration:{
      monthly:{
        price: '+$2/mo',
        addToTotal: 2,
      },
      yearly:{
        price: '+$20/yr',
        addToTotal: 20,
      }
    }
  },
  {   
    addon:'Customizable profile',
    description: 'Custom theme on your profile',
    duration:{
      monthly:{
        price: '+$2/mo',
        addToTotal: 1,
      },
      yearly:{
        price: '+$20/yr',
        addToTotal: 20,
      }
    }
  }
  ]
}
