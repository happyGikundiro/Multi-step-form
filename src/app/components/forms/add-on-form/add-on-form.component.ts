
import { Component, Input, Output,EventEmitter } from '@angular/core';
import { adds } from '../../../model/model';

@Component({
  selector: 'app-add-on-form',
  templateUrl: './add-on-form.component.html',
  styleUrl: './add-on-form.component.css'
})
export class AddOnFormComponent {
  @Input() isMonthly: boolean = true;
  @Output() selectedAddOnsChange = new EventEmitter<adds[]>();

  addsOptions: adds[] = [
    {
      addon: 'Online service',
      description: 'Access to multiplayer games',
      duration: {
        monthly: {
          price: '+$1/mo',
          addToTotal: 1,
        },
        yearly: {
          price: '+$10/yr',
          addToTotal: 10,
        }
      },
      selected: false
    },
    {
      addon: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      duration: {
        monthly: {
          price: '+$2/mo',
          addToTotal: 2,
        },
        yearly: {
          price: '+$20/yr',
          addToTotal: 20,
        }
      },
      selected: false
    },
    {
      addon: 'Customizable profile',
      description: 'Custom theme on your profile',
      duration: {
        monthly: {
          price: '+$2/mo',
          addToTotal: 1,
        },
        yearly: {
          price: '+$20/yr',
          addToTotal: 20,
        }
      },
      selected: false
    }
  ];

  getPrice(addon: adds): string {
    return this.isMonthly ? addon.duration.monthly.price : addon.duration.yearly.price;
  }

  toggleAddonSelection(addon: adds) {
    addon.selected = !addon.selected;
    this.SelectedAddOns();
  }

  SelectedAddOns() {
    const selectedAddOns = this.addsOptions.filter(addon => addon.selected);
    this.selectedAddOnsChange.emit(selectedAddOns);
  }
}


