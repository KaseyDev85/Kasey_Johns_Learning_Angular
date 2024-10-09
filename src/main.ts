import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { vehicles } from './app/data/mock-content';
import { VehicleListComponent } from './app/vehicle-list/vehicle-list.component';


const routes: Routes = [
  { path: 'vehicle', component: VehicleListComponent },
  { path: '', redirectTo: '/Vehicles', pathMatch: 'full'}
];


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});

