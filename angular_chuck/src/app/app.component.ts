import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormComponent} from './component/form/form.component';
import {ContactlistComponent} from './component/contactlist/contactlist.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormComponent,ContactlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_chuck';
}
