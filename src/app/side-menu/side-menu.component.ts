import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  @Output()
  emitter = new EventEmitter<boolean>();

  constructor() { }

  developListEmail(): any {
    this.emitter.emit();
  }
}
