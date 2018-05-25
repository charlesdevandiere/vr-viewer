import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent {

    @Input()
    route: string;

    @Output()
    click: EventEmitter = new EventEmitter();

    onClick(): void {
        this.click.emit(null);
    }
}
