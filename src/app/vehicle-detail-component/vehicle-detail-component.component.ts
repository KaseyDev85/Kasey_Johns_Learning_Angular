import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicles } from '../models/Vehicles';
import { VehiclesService } from '../services/vehicles.service';

@Component({
  selector: 'app-vehicle-detail-component',
  standalone: true,
  imports: [],
  templateUrl: './vehicle-detail-component.component.html',
  styleUrl: './vehicle-detail-component.component.scss'
})
export class VehicleDetailComponent implements OnInit {
  vehicles?: Vehicles; // Use appropriate type

  constructor(
    private route: ActivatedRoute, 
    private vehicleService: VehiclesService
  ) {}

  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.vehicleService.getVehicleItem(Number(id)).subscribe((data) => {
        this.vehicles = data;
      });
    }
  }
}
