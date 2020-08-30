import { EmailsService } from './../emails.service';
import { Email } from '../models/email';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {

  constructor(private es: EmailsService) {  }

  emails: Email[];

  ngOnInit(): void {
    this.emails = this.es.displayEmails();
  }

}
