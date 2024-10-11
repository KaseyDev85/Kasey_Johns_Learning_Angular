import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vehicles } from './models/Vehicles';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleListItemComponent } from './vehicle-list-item/vehicle-list-item.component';
import { VehiclesService } from './services/vehicles.service';
import { Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, VehicleListComponent, VehicleListItemComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  vehicleItem: Vehicles | null = null;

  constructor(private vehicle : VehiclesService) {
  }
  ngOnInit() {
    this.vehicle.getVehicleItem(1).subscribe({
      next: (data: Vehicles) => this.vehicleItem = data,
      error:err => console.error("Error Fetching Vehicles", err),
      complete: () => console.log("Vehicle data fetch complete!")
    })
  }
 

}

