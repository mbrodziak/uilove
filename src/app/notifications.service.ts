import { Injectable } from '@angular/core';
import { Notification } from './models/notification';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  notifications: Notification[] = [
    { when: '1 minute ago', by: 'Mike | Creative Mints', title: 'Mechanical Gasshopper', icon: 'phone', like: false },
    { when: '21 minutes ago', by: 'Dash', title: 'Assistant App - Weather Module', icon: 'rain', like: false },
    { when: '1 hour ago', by: 'Zeki Ghulam', title: 'Flat & Filthy - My upcoming verb agency', icon: 'img', like: false },
    { when: '2 hours ago', by: 'Bill S Kenney', title: 'Bamboo Branding Wall Piece - not flat', icon: 'download', like: false },
  ];

  displayNotifications(): Notification[] {
    return this.notifications;
  }

  deleteNotifications(title): Notification[] {
    for (let i = 0; this.notifications.length; i++) {
      if (this.notifications[i].title === title) {
        this.notifications.splice(i, 1);
        break;
      }
    }
    return this.notifications;
  }

  likeNotifications(title): Notification[] {
    for (let i = 0; this.notifications.length; i++) {
      if (this.notifications[i].title === title) {
        this.notifications[i].like = true;
        break;
      }
    }
    return this.notifications;
  }

  dontLikeNotifications(title): Notification[] {
    for (let i = 0; this.notifications.length; i++) {
      if (this.notifications[i].title === title) {
        this.notifications[i].like = false;
        break;
      }
    }
    return this.notifications;
  }
}

