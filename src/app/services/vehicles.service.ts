import { Injectable } from '@angular/core';
import { vehicles } from '../data/mock-content';
import { Observable, of } from 'rxjs';
import { Vehicles } from '../models/Vehicles';
import { Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor() { }

  getVehicleArray(): Observable<Vehicles[]>{
    return of(vehicles);
  }

  getVehicleItem(num: number): Observable<Vehicles[]>{
    let item;
    vehicles.forEach(vehicle => {
      if(vehicle.id == num){
        item = vehicle;
      }
    });
    return item;
  }

  @Input() AddVehicle(newItem: Vehicles): Observable<Vehicles[]> {
    vehicles.push(newItem);
    return of(vehicles);
  } 

  @Input() UpdateVehicle(id: number, item: Vehicles): Observable<Vehicles[]> {
    vehicles.forEach(vehicle => {
      if(vehicle.id == id){
        vehicles.splice(vehicles.indexOf(vehicle), 1);
        vehicles.push(item);
      }
    })
    return of(vehicles);
  }
  @Input() RemoveVehicle(id: number): Observable<Vehicles[]> {
    let item;
    vehicles.forEach(vehicle => {
      if(vehicle.id == id){
        item = vehicles.splice(vehicles.indexOf(vehicle), 1);
      }
    })
    return of(item);
  }

}
