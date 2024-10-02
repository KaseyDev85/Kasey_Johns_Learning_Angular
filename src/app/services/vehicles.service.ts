import { Injectable } from '@angular/core';
import { vehicles } from '../data/mock-content';
import { Observable, of } from 'rxjs';
import { Vehicles } from '../models/Vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor() { }

  getVehicleArray(): Observable<Vehicles[]>{
    return of(vehicles);
  }


}
