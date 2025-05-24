import { Component,inject, computed } from '@angular/core';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-contactlist',
  imports: [],
  templateUrl: './contactlist.component.html',
  styleUrl: './contactlist.component.css',
})
export class ContactlistComponent {
  contactService = inject(ContactService);
  contacts = computed(()=>this.contactService.contacts());
  public remove(indx:number) {
    this.contactService.removeContact(indx);
  }
}
