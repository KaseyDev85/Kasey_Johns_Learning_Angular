import { Component } from '@angular/core';
import { Vehicles } from '../models/Vehicles';
import { VehicleListItemComponent } from '../vehicle-list-item/vehicle-list-item.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [VehicleListItemComponent, NgFor, NgIf],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss'
})
export class VehicleListComponent {
  

}
