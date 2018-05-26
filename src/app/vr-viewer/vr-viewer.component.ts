import { Component, OnInit } from '@angular/core';
import * as VRView from '../../assets/libs/vrview/vrview.js';

@Component({
    selector: 'app-vr-viewer',
    templateUrl: './vr-viewer.component.html',
    styleUrls: ['./vr-viewer.component.scss']
})
export class VrViewerComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        const vrView = new VRView.Player('#vrview', {
            image: '/src/assets/machu-picchu.jpg'
        });
    }
}
