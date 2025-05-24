import { Component,inject, computed } from '@angular/core';
import { ContactService } from '../../service/contact.service';
import { FibonacciService } from '../../service/fibonacci.service';


@Component({
  selector: 'app-contactlist',
  imports: [],
  templateUrl: './contactlist.component.html',
  styleUrl: './contactlist.component.css',
  providers:[FibonacciService],
})
export class ContactlistComponent {
  contactService = inject(ContactService);
  contacts = computed(()=>this.contactService.contacts());
  fibonacciService = inject(FibonacciService);
  public remove(indx:number) {
    this.contactService.removeContact(indx);
  }
}
