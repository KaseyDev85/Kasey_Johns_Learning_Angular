import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { vehicles } from './app/data/mock-content';
import { VehicleListComponent } from './app/vehicle-list/vehicle-list.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { VehicleDetailComponent } from './app/vehicle-detail-component/vehicle-detail-component.component';


const routes: Routes = [
  { path: 'vehicle-list', component: VehicleListComponent },
  { path: 'vehicle/:id', component: VehicleDetailComponent },
  { path: '', redirectTo: '/vehicle-list', pathMatch: 'full'},
  { path: 'modify-list-item', component: ModifyListItemComponent},
  { path: '**', component: PageNotFoundComponent}
];


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});

