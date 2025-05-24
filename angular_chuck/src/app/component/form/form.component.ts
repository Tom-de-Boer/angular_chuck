import { Component, signal, inject } from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators, FormGroup} from '@angular/forms';
import { ChuckapiService } from '../../service/chuckapi.service';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [ChuckapiService],
})
export class FormComponent {
  chuckapiService = inject(ChuckapiService);
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
  busyApi= signal(false);
  errorApi = signal("");

  get firstName() {
    return this.form.get('firstName');
  }
  get phoneNumber() {
    return this.form.get('phoneNumber');
  }
  public save () {
    this.busyApi.set(true);
    this.chuckapiService.getJoke()
      .pipe(catchError((error)=>{
        console.error("error with chuck norris api", error);
        this.busyApi.set(false);
        this.errorApi.set(error+"")
        throw(error)
      }))
      .subscribe((joke)=>{
        this.busyApi.set(false);
        const jokeStr = joke.value;
        console.log("save jokeStr", jokeStr);
      });
  }
}
