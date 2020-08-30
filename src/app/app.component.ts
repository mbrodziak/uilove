import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'uilove';

  emails: HTMLDivElement;
  home: HTMLDivElement;
  sideMenu: HTMLDivElement;

  assign(): any {
    this.emails = document.querySelector('.emails');
    this.home = document.querySelector('.home');
    this.sideMenu = document.querySelector('.side-menu');
  }

  showListEmail(): any {
    this.assign();
    this.emails.classList.toggle('develop-list-email');
    this.home.classList.remove('develop-side-menu');
    this.sideMenu.classList.remove('develop-side-menu');
    this.home.classList.toggle('roll-side-menu');
    this.sideMenu.classList.toggle('roll-side-menu');
  }

  showSideMenu(): any {
    this.assign();
    this.home.classList.remove('roll-side-menu');
    this.sideMenu.classList.remove('roll-side-menu');
    this.home.classList.toggle('develop-side-menu');
    this.emails.classList.remove('develop-list-email');
    this.sideMenu.classList.toggle('develop-side-menu');
  }
}
