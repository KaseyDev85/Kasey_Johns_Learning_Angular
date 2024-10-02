import { Component } from '@angular/core';
import { VehicleListItemComponent } from '../vehicle-list-item/vehicle-list-item.component';
import { VehiclesService } from '../services/vehicles.service';


@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [VehicleListItemComponent],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss'
})
export class VehicleListComponent {

  constructor(private vehicle : VehiclesService) {

  }

}
