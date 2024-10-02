import { Injectable } from '@angular/core';
import { mockComponent } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor() { }

  getVehicleArray(){
    return mockComponent;
  }
}
