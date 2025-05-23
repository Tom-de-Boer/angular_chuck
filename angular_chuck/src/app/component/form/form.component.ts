import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form: FormGroup = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
    ]),
    phoneNumber: new FormControl("", [
      Validators.required,
      Validators.pattern("[0-9]{10}")
    ]),
  });
  get firstName() {
    return this.form.get('firstName');
  }
  get phoneNumber() {
    return this.form.get('phoneNumber');
  }
  public save () {
    console.log("save", this.firstName && this.firstName.value)
  }
}
