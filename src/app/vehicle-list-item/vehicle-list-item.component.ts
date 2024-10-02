import { Component, Input } from '@angular/core';
import { Vehicles } from '../models/Vehicles';


@Component({
  selector: 'app-vehicle-list-item',
  standalone: true,
  imports: [],
  templateUrl: './vehicle-list-item.component.html',
  styleUrl: './vehicle-list-item.component.scss'
})
export class VehicleListItemComponent {

  @Input() vehicle? : Vehicles;
}
