import { Injectable } from '@angular/core';
import { Email } from './models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  constructor() { }

  emails: Email[] = [
    { who: 'Jan Kowalski', title: 'Lorem ipsum dolor sit amet', when: 'Today, 13:25' },
    { who: 'Andrzej Nowak', title: 'Curabitur placerat a nisl vestibulum tempus', when: 'Today, 10:05', },
    { who: 'Andrzej Nowak', title: 'Sed sagittis velit enim', when: 'Yesterday, 16:56' },
    { who: 'Jan Nowakowski', title: 'Proin non mollis tellus', when: 'Yesterday, 14:34'},
  ];

  displayEmails(): Email[] {
    return this.emails;
  }

}
