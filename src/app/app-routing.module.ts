import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionViewComponent } from './collection-view/collection-view.component';
import { AlbumsViewComponent } from './albums-view/albums-view.component';

const routes: Routes = [
    { path: '', redirectTo: '/collection', pathMatch: 'full' },
    { path: 'collection', component: CollectionViewComponent },
    { path: 'albums', component: AlbumsViewComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
