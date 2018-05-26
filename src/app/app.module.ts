import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';

import { AppComponent } from './app.component';
import { ButtonComponent } from './controls/button/button.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NavButtonComponent } from './controls/nav-button/nav-button.component';
import { AppRoutingModule } from './/app-routing.module';
import { CollectionViewComponent } from './collection-view/collection-view.component';
import { AlbumsViewComponent } from './albums-view/albums-view.component';
import { TranslatePipe } from './utiles/i18n/translate.pipe';
import { VrViewerComponent } from './vr-viewer/vr-viewer.component';


@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        MainViewComponent,
        NavButtonComponent,
        CollectionViewComponent,
        AlbumsViewComponent,
        TranslatePipe,
        VrViewerComponent
    ],
    imports: [
        BrowserModule,
        NgxElectronModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
