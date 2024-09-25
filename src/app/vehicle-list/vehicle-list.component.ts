import { Component } from '@angular/core';
import { Vehicles } from '../models/Vehicles';
import { VehicleListItemComponent } from '../vehicle-list-item/vehicle-list-item.component';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [VehicleListItemComponent],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss'
})
export class VehicleListComponent {
  vehicles: Vehicles[] =
  [
    {id:1, year:"2000", make:"Toyota", model:"EA86", price:20, owned: false},
    {id:2, year:"2003", make:"Mazda", model:"Cx-7", price:15000, owned: false},
    {id:3, year:"2005", make:"Honda", model:"Civic", owned: true},
    {id:4, year:"2010", make:"Ford", model:"F-150", owned: true},
    

  ] 

}