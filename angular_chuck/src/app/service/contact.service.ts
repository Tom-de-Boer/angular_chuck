import { Injectable, signal } from '@angular/core';

export interface Contact {
  name: string,
  phone: string,
  joke: string,
}

@Injectable({providedIn: 'root'})
export class ContactService {

  constructor() { }

  contacts  = signal<Contact[]>([]);

  public addContact(contact: Contact): void {
    this.contacts.update(contacts=>[...contacts, contact]);
  }
  public removeContact(indx: Number): void {
    this.contacts.update(contacts=> contacts.filter((_, indxP)=>{
      return indxP !== indx;
    }));
  }
}
