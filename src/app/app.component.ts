import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vehicles } from './models/Vehicles';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, VehicleListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  vehicles: Vehicles[] =
  [
    {id:1, year:"2000", make:"GMC", model:"Sierra", price:20, owned: false},
    {id:2, year:"2003", make:"Mazda", model:"Rx-8", price:15000, owned: false},
    {id:3, year:"2005", make:"Honda", model:"Accord", owned: true},
    {id:4, year:"2010", make:"Kia", model:"Soul", owned: true},
    {id:5, year:"2012", make:"Ford", model:"F-150", price:300000, owned: false},
    {id:6, year:"2023", make:"Nissan", model:"GTR", owned: true},

  ] 

 

}

