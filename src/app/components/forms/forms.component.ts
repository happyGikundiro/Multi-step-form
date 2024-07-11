import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  constructor(public formService: FormService){}
  
}
