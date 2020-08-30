import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Notification } from '../models/notification';
import { NotificationsService } from './../notifications.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output()
  emitter = new EventEmitter<boolean>();

  constructor( private ns: NotificationsService ) {}

  notifications: Notification[];

  elementList: HTMLElement;

  ngOnInit(): void {
    this.notifications = this.ns.displayNotifications();
  }

  developSideMenu(): any {
    this.emitter.emit();
  }

  notify(element): any {
    this.elementList = document.querySelector('#' + element);
    this.elementList.classList.toggle('showInteraction');
  }

  delete(title): any {
    this.notifications = this.ns.deleteNotifications(title);
  }

  like(title): any {
    this.notifications = this.ns.likeNotifications(title);
  }

  dontLike(title): any {
    this.notifications = this.ns.dontLikeNotifications(title);
  }

}
