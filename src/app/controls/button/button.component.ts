import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

    @Input()
    icon: string;

    @Input()
    text: string;

    @Output()
    click: EventEmitter = new EventEmitter();

    onClick(): void {
        this.click.emit(null);
    }
}
