

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { EmailsComponent } from './emails/emails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsService } from './notifications.service';
import { EmailsService } from './emails.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideMenuComponent,
    EmailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    NotificationsService,
    EmailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
