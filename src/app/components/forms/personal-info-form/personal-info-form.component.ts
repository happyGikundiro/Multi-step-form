
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrl: './personal-info-form.component.css'
})
export class PersonalInfoFormComponent {
  @Output() formValid = new EventEmitter<boolean>();

  personalInfoForm!: FormGroup;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.personalInfoForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  validate() {
    if (this.personalInfoForm.valid) {
      this.formValid.emit(true);
    } else {
      this.personalInfoForm.markAllAsTouched();
      this.formValid.emit(false);
    }
  }
}
