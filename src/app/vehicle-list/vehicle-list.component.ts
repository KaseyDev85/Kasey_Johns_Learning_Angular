import { Component, OnInit } from '@angular/core';
import { VehicleListItemComponent } from '../vehicle-list-item/vehicle-list-item.component';
import { VehiclesService } from '../services/vehicles.service';
import { Vehicles } from '../models/Vehicles';
import { NgIf, NgFor } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [VehicleListItemComponent, NgFor, NgIf],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss'
})
export class VehicleListComponent implements OnInit{

  vehicleList: Vehicles[] = [];

  constructor(private vehicle : VehiclesService) {
  }
  ngOnInit() {
    this.vehicle.getVehicleArray().subscribe({
      next: (data: Vehicles[]) => this.vehicleList = data,
      error:err => console.error("Error Fetching Vehicles", err),
      complete: () => console.log("Vehicle data fetch complete!")
    })
  }

}
